import React from "react";
import styled from "@emotion/styled";
import { fontSize, palette } from "@src/styles/styles";
import SearchResultBlock from "./SearchResultBlock";
import { ISearchResult } from "@src/common/types/search";

const SearchResultList = ({
  searchResult,
}: {
  searchResult: ISearchResult;
}) => {
  console.log(searchResult);
  return (
    <ListWrapper>
      {Object(searchResult).length > 0 ? (
        Object(searchResult).map((result: ISearchResult) => (
          <SearchResultBlock key={result.id} data={result} />
        ))
      ) : (
        <NotFound>알맞은 검색 결과를 찾지 못하였습니다.</NotFound>
      )}
    </ListWrapper>
  );
};

const ListWrapper = styled.div`
  width: 1200px;
  height: auto;
  min-height: 100%; // 세로 최솟값 더 정확하게 연동시키는 방법?
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: ${palette.gray.light};
`;

const NotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${fontSize.mediumTitle}
  background: ${palette.gray}
  width: 100%;
  height: 50vh;
`;

export default SearchResultList;
