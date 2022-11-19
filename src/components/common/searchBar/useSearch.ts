import SearchApi from "@src/common/api/search";
import { ISearchKeywords, ISearchResult } from "@src/common/types/search";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { IOption } from "./categoryDropdown";

const useSearch = () => {
  const router = useRouter();

  const useSearchQuery = () => {
    const query = router.query;
    const apiQuery = query.q_field
      ? `q_field=${query.q_field}&search=${query.search}`
      : `search=${query.search}`;
    console.log(apiQuery);
    const { data } = useQuery<ISearchResult>(
      ["search", query.search],
      () => SearchApi.getSearchData(apiQuery),
      {
        initialData: {
          productName: "",
        },
      }
    );
    return data;
  };

  const useSearchKeywordQuery = (currentTab: IOption) => {
    const { data } = useQuery<ISearchKeywords>(
      ["search-keywords", currentTab.value],
      () => SearchApi.getSearchKeywords(currentTab.value),
      {
        initialData: {
          keywords: [],
        },
      }
    );
    return data.keywords;
  };

  return { useSearchQuery, useSearchKeywordQuery };
};

export default useSearch;
