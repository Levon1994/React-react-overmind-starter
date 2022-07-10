const createParams = params =>
  params && Object.keys(params).length
    ? '?' + Object.keys(params).map(key => `${key}=${params[key]}`).join('&')
    : '';

export default createParams;
