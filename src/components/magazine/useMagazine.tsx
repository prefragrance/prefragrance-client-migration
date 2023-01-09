import MagazineApi from "@src/common/api/magazine";
import { useQuery } from "@tanstack/react-query";
import { IMagazineProduct } from "@src/common/types/magazine";

export const useMagazine = (type: string, query: string) => {
  const { data, isLoading } = useQuery<IMagazineProduct[]>(
    ["magazine", type, query],
    () => MagazineApi.getMagazineData(type, query),
    {
      initialData: []
    }
  );

  return { magazineProduct: data, isMagazineProductLoading: isLoading };
};

