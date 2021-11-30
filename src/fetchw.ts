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

const apiCall = ({
  endpoint,
  method,
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

export { apiCall };
