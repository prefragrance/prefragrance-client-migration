import { ApiUrl } from "@src/common/constants/path";
import { ISearchKeywords, ISearchResult } from "@src/common/types/search";
import apiCall from "../apiCall";

class SearchApi {
  static async getSearchData(query: string): Promise<ISearchResult> {
    const response = await apiCall.get(
      `${ApiUrl.base}${ApiUrl.search}?${query}`
    );

    if (response.status !== 200) {
      throw new Error("Unable to get search result data");
    }

    return response.data;
  }

  static async postSearchData(payload: string): Promise<ISearchResult> {
    const response = await apiCall.post(
      `${ApiUrl.base}${ApiUrl.search}?search=${payload}`
    );

    if (response.status !== 201) {
      throw new Error("Unable to post search query");
    }

    return response.data;
  }

  static async getSearchKeywords(tab: string): Promise<ISearchKeywords> {
    // 추천/인기/최근검색어 탭을 의미함
    const response = await apiCall.get(
      `${ApiUrl.base}${ApiUrl.search}?tab=${tab}`
    );

    if (response.status !== 200) {
      throw new Error("Unable to get search keywords");
    }

    return response.data;
  }
}

export default SearchApi;
