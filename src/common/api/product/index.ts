import { ApiUrl } from "@src/common/constants/path";
import {
  IPostReviewPayload,
  IProductDetailResponse,
  IProductHotResponse,
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

  static async getProductHot(sort: string): Promise<IProductHotResponse[]> {
    const response = await apiCall.get(
      `${ApiUrl.base}${ApiUrl.product.hot}?s=${sort}`
    );

    if (response.status !== 200) {
      throw new Error("Unable to get product hot");
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

  static async postProductReview(
    payload: IPostReviewPayload
  ): Promise<unknown> {
    const { id, ...rest } = payload;
    const response = await apiCall.post(
      `${ApiUrl.base}${ApiUrl.product.detail}/${parseInt(id)}/review/`,
      rest
    );

    if (response.status !== 201) {
      throw new Error("Unable to post product review");
    }

    return response.data;
  }
}

export default ProductApi;
