import React, { Dispatch, SetStateAction } from "react";
import KeywordList from "./KeywordList";
import styled from "@emotion/styled";
import useRecentSearch from "../useRecentSearch";
import { palette } from "@src/styles/styles";
import CategoryTab, { Categories } from "./CategoryTab";
import { IOption } from "../categoryDropdown";
import { ISearchKeywords } from "@src/common/types/search";

export interface ICurrentTab {
  currentTab: IOption;
  setCurrentTab: Dispatch<SetStateAction<IOption>>;
}

export interface ISearchModal extends ICurrentTab {
  recentUpdate: number;
  setRecentUpdate: Dispatch<SetStateAction<number>>;
  searchKeywords: ISearchKeywords;
}

const SearchModal = ({
  recentUpdate,
  setRecentUpdate,
  currentTab,
  setCurrentTab,
  searchKeywords,
}: ISearchModal) => {
  const { deleteRecentSearchAll } = useRecentSearch();

  const handleDeleteRecentSearchAll = () => {
    deleteRecentSearchAll();
    // 최근 검색어 바꼈으니까 recentUpdate + 1
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
        searchKeywords={searchKeywords}
      />
      {currentTab.label === Categories.Recent && (
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
