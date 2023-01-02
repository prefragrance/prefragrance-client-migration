import React from "react";
import styled from "@emotion/styled";
import { fontSize, fontWeight, palette } from "@src/styles/styles";
import SearchResultItem from "./SearchResultItem";
import { ISearchResult } from "@src/common/types/search";
import Select from "@src/components/common/select/Select";
import { HStack, VStack } from "@common-components";

export interface IOrderProps {
  label: string;
  value: string;
}

const orderList: IOrderProps[] = [
  { label: "조회순", value: "" },
  { label: "별점순", value: "" },
  { label: "리뷰 많은 순", value: "" },
];

const SearchResultList = ({
  searchResult,
}: {
  searchResult: ISearchResult;
}) => {
  const searchResultCount = Object(searchResult).length | 0;
  return (
    <Wrapper>
      <InfoWrapper align="space-between" padding="0rem 0.5rem">
        <span>검색결과: 총 {searchResultCount}개</span>
        <Select optionList={orderList} value={""} />
      </InfoWrapper>
      <ListWrapper>
        {Object(searchResult).length > 0 ? (
          Object(searchResult).map((result: ISearchResult) => (
            <SearchResultItem key={result.id} data={result} />
          ))
        ) : (
          <NotFound>원하는 검색 결과를 찾지 못했습니다.</NotFound>
        )}
      </ListWrapper>
    </Wrapper>
  );
};

const Wrapper = styled(VStack)`
  width: 70vw;
`;

const ListWrapper = styled.div`
  width: 100%;
  height: auto;
  // min-height: 100%; // 세로 최솟값 더 정확하게 연동시키는 방법?
  display: flex;
  flex-direction: column;
  overflow-y: scroll;
  & > div:not(:last-child) {
    border-bottom: 1px solid ${palette.gray.dark};
  }
`;

const InfoWrapper = styled(HStack)`
  width: 100%;
  span {
    font-weight: ${fontWeight.semiBold};
  }
`;

const NotFound = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${fontSize.mediumTitle}
  border: 1px solid ${palette.gray}
  width: 100%;
  height: 50vh;
`;

export default SearchResultList;
