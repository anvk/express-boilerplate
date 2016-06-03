export const ip = 'localhost';
export const port = 3000;
export const apiPrefix = '/api';
export const apiVersion = '/v1';
export const token = {
  secret: 'SOME-KEY-HERE',
  headerName: 'x-access-token'
};
export const httpCodes = {
  HTTP_SUCCESS: 200,
  HTTP_CLIENT_ERROR: 400,
  HTTP_INVALID_TOKEN: 401,
  HTTP_NOT_AUTHORIZED: 403,
  HTTP_NOT_FOUND: 404,
  HTTP_SERVER_ERROR: 500
};
export const db = {
  user: 'USER',
  password: 'PASSWORD',
  server: 'MY_SERVER',
  database: 'MY_DATABASE'
};
export const someApiService = {
  token: 'API_TOKEN',
  url: 'http://blah.com',
  timeout: 15000
};
