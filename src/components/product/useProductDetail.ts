import ProductApi from "@src/common/api/product";
import { Category, IProductDetailResponse } from "@src/common/types/product";
import { useQuery } from "@tanstack/react-query";

export const useProductDetail = (id: string | string[] | undefined) => {
  const { data, isLoading } = useQuery<IProductDetailResponse>(
    ["product-detail", id],
    () => ProductApi.getProductDetail(String(id)),
    {
      enabled: !!id,
      initialData: {
        id: 0,
        category: Category.Perfume,
        name: "",
        producer: "",
        tags: [],
        codes: [],
        feedback_cnt: 0,
        review_cnt: 0,
        visit_cnt: 0,
        thumbnail_url: "",
        rate_sum: 0,
        rate: 0,
        liked_users: [],
      },
    }
  );

  return { productDetail: data, isProductDetailLoading: isLoading };
};
