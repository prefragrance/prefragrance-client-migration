import SearchApi from "@src/common/api/search";
import { ISearchKeywords, ISearchResult } from "@src/common/types/search";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { IOption } from "./categoryDropdown";

export const useSearchQuery = () => {
  const router = useRouter();

  const query = router.query;
  const apiQuery = query.q_field
    ? `q_field=${query.q_field}&search=${query.search}`
    : `search=${query.search}`;
  const { data } = useQuery<ISearchResult>(
    ["search", query.search],
    () => SearchApi.getSearchData(apiQuery),
    {
      initialData: {
        id: 0,
        name: "",
        producer: "",
        category: "",
        feedback_cnt: 0,
        review_cnt: 0,
        visit_cnt: 0,
        thumbnail_url: "",
        rate_sum: 0,
        rate: 0,
        tags: "",
        codes: [],
      },
    }
  );
  return { searchResult: data };
};

export const useSearchKeywordQuery = (currentTab: IOption) => {
  const { data } = useQuery<ISearchKeywords>(
    ["search-keywords", currentTab.value],
    () => SearchApi.getSearchKeywords(currentTab.value),
    {
      initialData: {
        keywords: [],
      },
    }
  );
  return { searchKeywords: data.keywords };
};
