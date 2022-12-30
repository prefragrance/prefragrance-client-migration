import { ApiUrl } from "@src/common/constants/path";
import { IProductDetailResponse } from "@src/common/types/product";
import apiCall from "../apiCall";

class ProductApi {
  static async getProductDetail(id: string): Promise<IProductDetailResponse> {
    const response = await apiCall.get(
      `${ApiUrl.base}${ApiUrl.product.detail}/${parseInt(id)}/`
    );

    if (response.status !== 200) {
      throw new Error("Unable to get product detail");
    }

    return response.data;
  }
}

export default ProductApi;
