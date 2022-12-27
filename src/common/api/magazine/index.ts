import { ApiUrl } from "@src/common/constants/path";
import { IMagazineProduct } from "@src/common/types/magazine";
import apiCall from "../apiCall";

class MagazineApi {
  static async getMagazineData(
    type: string,
    query: string
  ): Promise<IMagazineProduct> {
    const response = await apiCall.get(
      `${ApiUrl.base}${ApiUrl.product.magazine}/?${type}=${query}`
    );

    if (response.status !== 200) {
      throw new Error("Unable to get magazine data");
    }

    return response.data;
  }
}

export default MagazineApi;
