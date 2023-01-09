import ProductApi from "@src/common/api/product";
import { IProductReviewResponse } from "@src/common/types/product";
import { useQuery } from "@tanstack/react-query";

export const useMagazineReview = (id: string | string[] | undefined) => {
  const { data, isLoading } = useQuery<IProductReviewResponse[]>(
    ["product-review", id],
    () => ProductApi.getProductReview(String(id)),
    {
      enabled: !!id,
      initialData: [],
    }
  );

  return { magazineReview: data, isMagazineReviewLoading: isLoading };
};
