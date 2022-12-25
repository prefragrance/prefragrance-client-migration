import React from "react";
import styled from "@emotion/styled";
import { palette } from "@src/styles/styles";
import SearchResultBlock from "./SearchResultBlock";
import { ISearchResultData } from "@src/pages/search-result";

const SearchResultList = ({
  searchResultData,
}: {
  searchResultData: ISearchResultData[];
}) => {
  return (
    <Container>
      {searchResultData &&
        searchResultData.map((result: ISearchResultData) => (
          <SearchResultBlock key={result.id} data={result} />
        ))}
    </Container>
  );
};

const Container = styled.div`
  width: 1200px;
  height: auto;
  min-height: 100%; // 세로 최솟값 더 정확하게 연동시키는 방법?
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  background-color: ${palette.gray.light};
`;

export default SearchResultList;
