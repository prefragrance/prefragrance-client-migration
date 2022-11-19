import { ApiUrl } from "@src/common/constants/path";
import { ISearchKeywords, ISearchResult } from "@src/common/types/search";
import apiCall from "../apiCall";

class SearchApi {
  static async getSearchData(query: string): Promise<ISearchResult> {
    const response = await apiCall.get(`${ApiUrl.Search}?${query}`);

    if (response.status !== 200) {
      throw new Error("Unable to get search result data");
    }

    return response.data;
  }

  static async getSearchKeywords(tab: string): Promise<ISearchKeywords> {
    const response = await apiCall.get(`${ApiUrl.Search}/?tab=${tab}`);

    if (response.status !== 200) {
      throw new Error("Unable to get search keywords");
    }

    return response.data;
  }
}

export default SearchApi;
