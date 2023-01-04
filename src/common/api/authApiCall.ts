import axios, { AxiosRequestConfig } from "axios";
import { ApiUrl } from "../constants/path";
import {
  getLocalStorage,
  LocalStorageName,
  setLocalStorage,
} from "../hooks/useLocalStorage";
import AuthApi from "./auth";

const authApiCall = axios.create({
  baseURL: ApiUrl.base,
});

const requestInterceptor = (request: AxiosRequestConfig) => {
  if (request.headers && !request.headers.authorization) {
    const token = getLocalStorage(LocalStorageName.AccessToken);
    if (token) {
      request.headers.authorization = `Bearer ${token}`;
    }
  }

  return request;
};

const responseInterceptorError = () => async (error: any) => {
  const originalConfig = error.config;
  const { status } = error.response;

  if (status === 500) {
    return Promise.reject(error);
  }

  if (status === 401) {
    const currentRefreshToken = getLocalStorage(LocalStorageName.RefreshToken);

    if (currentRefreshToken) {
      try {
        // deleteLocalStorage(LocalStorageName.AccessToken);
        originalConfig.headers.authorization = null;

        const { access } = await AuthApi.postRefreshToken(currentRefreshToken);
        setLocalStorage({
          name: LocalStorageName.AccessToken,
          value: access,
        });
      } catch (error) {
        // deleteLocalStorageAll();
        // window.location.assign(RouterUrl.Login);
        return Promise.reject(error);
      }
      originalConfig._retry = true;
      return authApiCall(originalConfig);
    } else {
      // deleteLocalStorage(LocalStorageName.RefreshToken);
      // window.location.assign(RouterUrl.Login);
      return Promise.reject(error);
    }
  }

  if (status === 403) {
    // deleteLocalStorage(LocalStorageName.AccessToken);
    // deleteLocalStorage(LocalStorageName.RefreshToken);
    // window.location.assign(RouterUrl.Login);
    return Promise.reject(error);
  }

  return Promise.reject(error);
};

authApiCall.interceptors.request.use(requestInterceptor);
authApiCall.interceptors.response.use(
  (response) => response,
  responseInterceptorError()
);

export default authApiCall;
