import styled from "@emotion/styled";
import {
  emptyLocalStorage,
  LocalStorageName,
} from "@src/common/hooks/useLocalStorage";
import { palette } from "@src/styles/styles";
import { Dispatch, SetStateAction } from "react";
import { IOption } from "../categoryDropdown";
import useRecentSearch from "../useRecentSearch";
import { useSearchKeywordQuery } from "../useSearch";
import CategoryTab, { SearchModalCategoriesName } from "./CategoryTab";
import KeywordList from "./KeywordList";

export interface ICurrentTab {
  currentTab: IOption;
  setCurrentTab: Dispatch<SetStateAction<IOption>>;
}

export interface ISearchModal extends ICurrentTab {
  recentUpdate: number;
  setRecentUpdate: Dispatch<SetStateAction<number>>;
}

const SearchModal = ({
  recentUpdate,
  setRecentUpdate,
  currentTab,
  setCurrentTab,
}: ISearchModal) => {
  const { deleteRecentSearchAll } = useRecentSearch();
  const { searchKeywords } = useSearchKeywordQuery(currentTab); // 추천/인기 검색어 데이터
  const recentSearchKeywords =
    emptyLocalStorage(LocalStorageName.RecentSearchList).length > 0
      ? JSON.parse(emptyLocalStorage(LocalStorageName.RecentSearchList))
      : emptyLocalStorage(LocalStorageName.RecentSearchList);

  const handleDeleteRecentSearchAll = () => {
    deleteRecentSearchAll();
    // 최근 검색어 리스트가 바꼈으니까 recentUpdate + 1
    setRecentUpdate(recentUpdate + 1);
  };

  return (
    <ModalSection>
      <CategoryTab currentTab={currentTab} setCurrentTab={setCurrentTab} />
      <KeywordList
        currentTab={currentTab}
        setCurrentTab={setCurrentTab}
        recentUpdate={recentUpdate}
        setRecentUpdate={setRecentUpdate}
        searchKeywords={
          currentTab.value === SearchModalCategoriesName.Recent
            ? recentSearchKeywords
            : searchKeywords
        }
      />
      {currentTab.value === SearchModalCategoriesName.Recent && (
        <BtnSection>
          <DeleteAllBtn onClick={handleDeleteRecentSearchAll}>
            전체 삭제
          </DeleteAllBtn>
        </BtnSection>
      )}
    </ModalSection>
  );
};

const ModalSection = styled.div`
  // 모달창 크기
  // width - 검색바 크기(변수)랑 동기화시켜줘야 함
  width: 800px;
  min-height: 100px;

  position: absolute;
  top: 55px;
  z-index: 999;

  background-color: ${palette.white};
  border: 1px solid ${palette.gray.light};
  border-radius: 0.4rem;
  box-sizing: border-box;
  box-shadow: 0 0.1rem 2rem rgba(0, 0, 0, 0.2);
  padding: 0.4rem;
`;

const BtnSection = styled.div`
  height: 25px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0.5rem;
  padding-top: 0.4rem;
`;

const DeleteAllBtn = styled.div`
  cursor: pointer;
  display: flex;
  padding: 0.2rem;
  border-radius: 0.2rem;
  align-items: center;
  font-size: 0.7rem;
  color: ${palette.gray.dark};
`;

export default SearchModal;
