import { ApiUrl } from "@src/common/constants/path";
import { ILogin } from "@src/common/types/user";
import apiCall from "../apiCall";

class AuthApi {
  static async postLogin(payload: ILogin): Promise<ILogin> {
    const response = await apiCall.post(
      `${ApiUrl.base}${ApiUrl.accounts.login}`,
      payload
    );

    if (response.status !== 201) {
      throw new Error("Unable to login");
    }

    return response.data;
  }
}

export default AuthApi;
