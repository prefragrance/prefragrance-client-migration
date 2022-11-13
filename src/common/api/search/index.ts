import { ApiUrl } from "@src/common/constants/path";
import { getLocalStorage } from "@src/common/hooks/useLocalStorage";
import { ISearchKeywords, ISearchResult } from "@src/common/types/search";
import { ISearchPayload } from "@src/components/common/searchBar";
import { Categories } from "@src/components/common/searchBar/searchModal/CategoryTab";
import apiCall from "../apiCall";

class SearchApi {
  static async getSearchData({
    category,
    searchInput,
  }: ISearchPayload): Promise<ISearchResult> {
    const query =
      category === "whole"
        ? `?search=${searchInput}`
        : `?q_field=${category}&search=${searchInput}`;
    const response = await apiCall.get(ApiUrl.Base + ApiUrl.Search + query);

    if (response.status !== 200) {
      throw new Error("Unable to get search result data");
    }

    return response.data;
  }

  static async getSearchKeywords(tab: string): Promise<ISearchKeywords> {
    if (tab === Categories.Recent) {
      const response = getLocalStorage("recentSearchList");

      return JSON.parse(response || "");
    } else {
      const response = await apiCall.get(
        ApiUrl.Base + ApiUrl.Search + `?tab=${tab}`
      );

      if (response.status !== 200) {
        throw new Error("Unable to get search keywords");
      }

      return response.data;
    }
  }
}

export default SearchApi;
