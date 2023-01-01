import { ISearchQuery } from "@src/common/store/searchInput";
import {
  deleteLocalStorage,
  emptyLocalStorage,
  LocalStorageName,
  setLocalStorage,
} from "@src/common/hooks/useLocalStorage";

const useRecentSearch = () => {
  // 최근검색어 업데이트
  const updateRecentSearch = (value: ISearchQuery) => {
    // localStorage에서 가져오고 validation check
    const isEmpty = emptyLocalStorage(LocalStorageName.RecentSearchList);
    // emptyLocalStorage()로 가져오는 값은 문자열화돼있는 배열이거나 빈 배열임
    let recentSearchList = isEmpty.length > 0 ? JSON.parse(isEmpty) : isEmpty;
    // recentSearchList에 value가 이미 있는지 check. 빈 배열이거나 객체로 채워져있는 배열 모두 비교 가능
    const already = recentSearchList.findIndex(
      (ele: ISearchQuery) => JSON.stringify(ele) == JSON.stringify(value)
    );
    // recentSearchList에 value가 이미 있으면
    if (already >= 0) {
      // 기존에 있던 검색어 삭제하고
      recentSearchList.splice(already, 1);
      // value 맨 앞에 추가
      recentSearchList.unshift(value);
      // value가 없으면 맨 앞에 추가만
    } else {
      recentSearchList.unshift(value);
    }
    // 최근검색어가 5개 넘어가면 cut
    if (recentSearchList.length > 5) {
      recentSearchList = recentSearchList.slice(0, 5);
    }
    setLocalStorage({
      name: LocalStorageName.RecentSearchList,
      value: JSON.stringify(recentSearchList),
    });
  };

  // 최근검색어 하나 삭제
  const deleteRecentSearchEach = (value: ISearchQuery) => {
    const isEmpty = emptyLocalStorage(LocalStorageName.RecentSearchList);
    const recentSearchList = isEmpty.length > 0 ? JSON.parse(isEmpty) : isEmpty;
    const already = recentSearchList.findIndex(
      (ele: ISearchQuery) => JSON.stringify(ele) == JSON.stringify(value)
    );
    if (already >= 0) {
      recentSearchList.splice(already, 1);
    }
    setLocalStorage({
      name: LocalStorageName.RecentSearchList,
      value: JSON.stringify(recentSearchList),
    });
  };

  // 최근검색어 전체삭제
  const deleteRecentSearchAll = () => {
    deleteLocalStorage(LocalStorageName.RecentSearchList);
  };

  return { updateRecentSearch, deleteRecentSearchEach, deleteRecentSearchAll };
};

export default useRecentSearch;
