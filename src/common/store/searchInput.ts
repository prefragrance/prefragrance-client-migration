import { atom, selector } from "recoil";

export interface ISearchQuery {
  q_field: string;
  searchText: string;
}

export const searchQuery = atom<ISearchQuery>({
  // 쿼리필드와 검색필드 2개 관리
  key: "search-query",
  default: {
    q_field: "whole",
    searchText: "",
  },
});

export const getSearchQuerySelector = selector({
  // 검색어 쿼리 실시간 업데이트용 셀렉터. 미완
  key: "search-query/get",
  get: ({ get }) => {
    const data = get(searchQuery);
    return data;
  },
  set: ({ set }, newValue) => {
    set(searchQuery, newValue);
  },
});
