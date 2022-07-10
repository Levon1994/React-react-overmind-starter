import { LOGIN } from 'constants/api';

const login = async (username, password, deviceToken = null) => {
  const body = {
    Device: deviceToken,
    Language: 'en',
    Password: password,
    Username: username,
  };

  const options = {
    mode: 'cors',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authentication': null,
    },
    body: JSON.stringify(body),
  };

  const response = await fetch(LOGIN, options);
  const token = response.headers.get('authentication');
  const json = await response.json();
  const data = json.Data;

  return {
    user: data,
    token,
  };
};

export default login;
