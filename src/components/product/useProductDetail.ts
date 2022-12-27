import ProductApi from "@src/common/api/product";
import { IProductDetailResponse } from "@src/common/types/product";
import { useQuery } from "@tanstack/react-query";

export const useProductDetail = (id: string) => {
  const { data, isLoading } = useQuery<IProductDetailResponse>(
    ["product-detail", id],
    () => ProductApi.getProductDetail(id),
    {
      enabled: !id,
    }
  );

  return { productDetail: data, isProductDetailLoading: isLoading };
};
