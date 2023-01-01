import { ApiUrl } from "@src/common/constants/path";
import {
  IProductDetailResponse,
  IProductReviewResponse,
} from "@src/common/types/product";
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

  static async getProductReview(id: string): Promise<IProductReviewResponse[]> {
    const response = await apiCall.get(
      `${ApiUrl.base}${ApiUrl.product.detail}/${parseInt(id)}/review/`
    );

    if (response.status !== 200) {
      throw new Error("Unable to get product review");
    }

    return response.data;
  }
}

export default ProductApi;
