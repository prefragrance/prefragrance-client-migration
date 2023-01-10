import React, { useState } from "react";
import Categories from "@src/components/search-result/Categories";
import styled from "@emotion/styled";
import { VStack } from "@src/components/common";
import SearchResultList from "@src/components/search-result/SearchResultList";

export interface ICurrentCategory {
  currentCate: string;
  setCurrentCate: React.Dispatch<React.SetStateAction<string>>;
}

const SearchResultPage = () => {
  const [currentCate, setCurrentCate] = useState<string>("전체");

  return (
    <CenterWrapper>
      <PageWrapper>
        <Categories currentCate={currentCate} setCurrentCate={setCurrentCate} />
        <SearchResultList />
      </PageWrapper>
    </CenterWrapper>
  );
};

const PageWrapper = styled(VStack)`
  width: 1000px;
`;
const CenterWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default SearchResultPage;
