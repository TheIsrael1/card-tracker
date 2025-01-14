import axios, { AxiosRequestConfig } from 'axios';

const baseURL = import.meta.env.VITE_USE_PROXY === 'true' ? '/api' : import.meta.env.VITE_API_URL;

// api with auth
const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

axiosInstance.interceptors.request.use(
  (config): any => {
    return {
      ...config,
      withCredentials: true,
      headers: {
        ...config.headers,
      },
    };
  },
  (error) => {
    return Promise.reject(error);
  },
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

// api no auth
export const ApiNoAuth = axios.create({
  baseURL,
  withCredentials: true,
});

ApiNoAuth.interceptors.request.use(
  (config) => {
    return { ...config, withCredentials: true };
  },
  (error) => {
    return Promise.reject(error);
  },
);

ApiNoAuth.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
