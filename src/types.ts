export interface ApiRequest {
  endpoint: string;
  headers?: Record<string, string>;
  method?: 'GET' | 'PATCH' | 'PUT' | 'POST' | 'DELETE';
  payload?: Record<string, string>;
  successCallback?: (response: any) => void;
  errorCallback?: (error: any) => void;
}
