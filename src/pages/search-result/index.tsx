import React, { useState } from "react";
import Categories from "@src/components/search-result/Categories";
import { SelectTab } from "@src/components/search-result";
import SearchResultList from "@src/components/search-result/SearchResultList";
import { useSearchQuery } from "@src/components/common/searchBar/useSearch";
import styled from "@emotion/styled";
import { LoadingSpinner, VStack } from "@src/components/common";

export interface ICurrentCategory {
  currentCate: string;
  setCurrentCate: React.Dispatch<React.SetStateAction<string>>;
}

const SearchResultPage = () => {
  const { searchResult, isSearchLoading } = useSearchQuery();
  const [currentCate, setCurrentCate] = useState<string>("향수");

  if (isSearchLoading) {
    return <LoadingSpinner />;
  }

  return (
    <CenterWrapper>
      <PageWrapper>
        <Categories currentCate={currentCate} setCurrentCate={setCurrentCate} />
        <SelectTab searchResultCount={Object(searchResult).length} />
        <SearchResultList searchResult={searchResult} />
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
