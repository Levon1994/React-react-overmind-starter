import { appKey } from 'configs';

import RequestStore from './requestStore';
import errorHandler from './errorHandler';

const getToken = () => {
  const data = localStorage.getItem(`${appKey}-token`);
  return JSON.parse(data);
};

const makeUnique = (url, method, data) => `${url}-${method}-${data}`;

class Fetch {
  static async get(url, signal) {
    return Fetch.request(url, 'GET', null, signal);
  }

  static async post(url, data, signal) {
    return Fetch.request(url, 'POST', data, signal);
  }

  static async put(url, data, signal) {
    return Fetch.request(url, 'PUT', data, signal);
  }

  static async request(url, method, data, signal) {
    const token = getToken();

    const headers = {
      'Content-Type': 'application/json',
    };

    if (token) {
      headers.Authentication = token;
    }

    const body = (method === 'POST' || method === 'PUT') ? JSON.stringify(data) : null;

    const response = await Fetch.cachableRequest(url, method, headers, body, signal);

    const result = await response.clone().json();

    return {
      headers: response.headers,
      status: response.status,
      ...result,
    };
  }

  static async cachableRequest(url, method, headers, body, signal) {
    // hashing endpoint uniquely
    const hash = makeUnique(url, method, body);

    /** Existence in "RequestStore" will mean that same request is already has "pending" status,
     * so no need to request it twice.
     * Store request for further exploitation.
     */
    const request = RequestStore.has(hash)
      ? RequestStore.get(hash)
      : fetch(url, { method, headers, body, signal, credentials: 'include' });

    RequestStore.set(hash, request);

    const response = await request;

    RequestStore.drop(hash);

    return errorHandler(response);
  }
}

export { getToken };

export default Fetch;
