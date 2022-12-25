import { ApiUrl } from "@src/common/constants/path";
import {
  ILogin,
  ILoginResponse,
  ILogoutResponse,
  IRegisterPayload,
  IRegisterResponse,
  ITokenRefreshResponse,
  IUser,
} from "@src/common/types/user";
import apiCall from "../apiCall";

class AuthApi {
  static async postLogin(payload: ILogin): Promise<ILoginResponse> {
    const response = await apiCall.post(
      `${ApiUrl.base}${ApiUrl.accounts.login}`,
      payload
    );

    if (response.status !== 200) {
      throw new Error("Unable to login");
    }

    return response.data;
  }

  static async verifyToken(token: string) {
    const response = await apiCall.post(
      `${ApiUrl.base}${ApiUrl.accounts.tokenVerify}`,
      {
        token: token,
      }
    );

    if (response.status !== 200) {
      throw new Error("Unable to login");
    }

    return response.status;
  }

  static async postRefreshToken(token: string): Promise<ITokenRefreshResponse> {
    const response = await apiCall.post(
      `${ApiUrl.base}${ApiUrl.accounts.tokenRefresh}`,
      {
        refresh: token,
      }
    );

    if (response.status !== 200) {
      throw new Error("Unable to refresh token");
    }

    return response.data;
  }

  static async getLogout(): Promise<ILogoutResponse> {
    const response = await apiCall.get(
      `${ApiUrl.base}${ApiUrl.accounts.logout}`
    );

    if (response.status !== 200) {
      throw new Error("Unable to logout");
    }

    return response.data;
  }

  static async getUser(): Promise<IUser> {
    const response = await apiCall.get(`${ApiUrl.base}${ApiUrl.accounts.user}`);

    if (response.status !== 200) {
      throw new Error("Unable to get user");
    }

    return response.data;
  }

  static async postRegister(
    payload: IRegisterPayload
  ): Promise<IRegisterResponse> {
    const response = await apiCall.post(
      `${ApiUrl.base}${ApiUrl.accounts.register}`,
      payload
    );

    if (response.status !== 201) {
      throw new Error("Unable to post register");
    }

    return response.data;
  }
}

export default AuthApi;
