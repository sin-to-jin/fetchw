import { ApiRequest } from './types';

const APPLICATION_JSON = 'application/json';

const defaultHeaders = {
  Accept: APPLICATION_JSON,
  'Content-Type': APPLICATION_JSON,
} as const;

const defaultSuccessCallback = (response: any) => {
  console.info(response);
};

const defaultErrorCallback = (error: any) => {
  console.error(error);
};

const fetchw = ({
  endpoint,
  method = 'GET',
  payload,
  headers = defaultHeaders,
  successCallback = defaultSuccessCallback,
  errorCallback = defaultErrorCallback,
}: ApiRequest): Promise<void> => {
  const body = payload ? JSON.stringify({ ...payload }) : null;

  return fetch(endpoint, { method, headers, body })
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        throw new Error(`Error: ${response.status}`);
      }
    })
    .then((response) => {
      successCallback(response);
    })
    .catch((error) => {
      errorCallback(error);
    });
};

export default fetchw;

const get = ({
  endpoint,
  headers = defaultHeaders,
  successCallback = defaultSuccessCallback,
  errorCallback = defaultErrorCallback,
}: ApiRequest): Promise<void> => {
  return fetchw({
    method: 'GET',
    endpoint,
    headers,
    successCallback,
    errorCallback,
  });
};

const patch = ({
  endpoint,
  payload,
  headers = defaultHeaders,
  successCallback = defaultSuccessCallback,
  errorCallback = defaultErrorCallback,
}: ApiRequest): Promise<void> => {
  return fetchw({
    method: 'PATCH',
    endpoint,
    payload,
    headers,
    successCallback,
    errorCallback,
  });
};

const put = ({
  endpoint,
  payload,
  headers = defaultHeaders,
  successCallback = defaultSuccessCallback,
  errorCallback = defaultErrorCallback,
}: ApiRequest): Promise<void> => {
  return fetchw({
    method: 'PUT',
    endpoint,
    payload,
    headers,
    successCallback,
    errorCallback,
  });
};

const post = ({
  endpoint,
  payload,
  headers = defaultHeaders,
  successCallback = defaultSuccessCallback,
  errorCallback = defaultErrorCallback,
}: ApiRequest): Promise<void> => {
  return fetchw({
    method: 'POST',
    endpoint,
    payload,
    headers,
    successCallback,
    errorCallback,
  });
};

const destroy = ({
  endpoint,
  payload,
  headers = defaultHeaders,
  successCallback = defaultSuccessCallback,
  errorCallback = defaultErrorCallback,
}: ApiRequest): Promise<void> => {
  return fetchw({
    method: 'DELETE',
    endpoint,
    payload,
    headers,
    successCallback,
    errorCallback,
  });
};

export { get, post, patch, put, destroy };
