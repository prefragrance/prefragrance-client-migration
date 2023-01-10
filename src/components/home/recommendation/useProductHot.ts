import ProductApi from "@src/common/api/product";
import { IProductHotResponse } from "@src/common/types/product";
import { useQuery } from "@tanstack/react-query";

export const useProductHot = (sort: string) => {
  const { data, fetchStatus } = useQuery<IProductHotResponse[]>(
    ["product-hot", sort],
    () => ProductApi.getProductHot(sort),
    {
      enabled: !!sort,
      initialData: [],
    }
  );
  return { productHot: data, fetchStatus };
};
