import SearchApi from "@src/common/api/search";
import { ISearchKeywords, ISearchResult } from "@src/common/types/search";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { IOption } from "./categoryDropdown";
import { SearchModalCategoriesName } from "./searchModal/CategoryTab";

export const useSearchQuery = () => {
  const router = useRouter();

  const query = router.query;
  const apiQuery = query.q_field
    ? `q_field=${query.q_field}&search=${query.search}`
    : `search=${query.search}`;
  const { fetchStatus, data } = useQuery<ISearchResult>(
    ["search", query.search],
    () => SearchApi.getSearchData(apiQuery),
    {
      enabled: !!query.search,
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
      refetchOnWindowFocus: false,
    }
  );
  const { mutate } = useMutation(
    () => SearchApi.postSearchData(query.search as string)
    // {
    //   onSettled: () => {
    //     console.log("end");
    //   },
    //   onError: (error) => {
    //     console.log(error);
    //   },
    // }
  ); // 백엔드 작업 끝나면 apiQuery 넘겨야 함
  return {
    searchResult: data,
    fetchStatus,
    postSearchQuery: mutate,
  };
};

export const useSearchKeywordQuery = (currentTab: IOption) => {
  // 추천/인기/최근검색어 api calling function
  const { data } = useQuery<ISearchKeywords>(
    ["search-keywords", currentTab.value],
    () => SearchApi.getSearchKeywords(currentTab.value),
    {
      enabled: currentTab.value !== SearchModalCategoriesName.Recent,
      initialData: {
        keywords: [],
      },
    }
  );
  return { searchKeywords: data.keywords };
};
