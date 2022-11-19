import React from "react";
import KeywordItem from "./KeywordItem";
import { ISearchModal } from ".";
import styled from "@emotion/styled";
import { palette } from "@src/styles/styles";

interface IKeywordList extends ISearchModal {
  searchKeywords: string[];
}

const KeywordList = ({
  currentTab,
  recentUpdate,
  setRecentUpdate,
  searchKeywords,
}: IKeywordList) => {
  return (
    <Wrapper>
      {searchKeywords && searchKeywords.length > 0 ? (
        searchKeywords.map((keyword) => (
          <KeywordItem
            key={keyword}
            text={keyword}
            currentTab={currentTab}
            recentUpdate={recentUpdate}
            setRecentUpdate={setRecentUpdate}
          />
        ))
      ) : (
        <NoRecentSearch>{currentTab.label} 내역이 없습니다.</NoRecentSearch>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  padding: 0.4rem 0;
  display: flex;
  flex-direction: column;
  font-size: 0.9rem;
  border-bottom: 1px solid ${palette.gray.light};
`;

const NoRecentSearch = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
`;

export default KeywordList;
