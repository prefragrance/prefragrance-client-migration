import React, { useState } from "react";
import Categories from "@src/components/search-result/Categories";
import { SelectTab } from "@src/components/search-result";
import SearchResultList from "@src/components/search-result/SearchResultList";
import { useSearchQuery } from "@src/components/common/searchBar/useSearch";
import styled from "@emotion/styled";
import { VStack } from "@src/components/common";

export interface ICurrentCategory {
  currentCate: string;
  setCurrentCate: React.Dispatch<React.SetStateAction<string>>;
}

const SearchResultPage = () => {
  const { searchResult } = useSearchQuery();
  const [currentCate, setCurrentCate] = useState<string>("향수");
  console.log(searchResult);

  return (
    <PageWrapper>
      <Categories currentCate={currentCate} setCurrentCate={setCurrentCate} />
      <SelectTab searchResultCount={Object(searchResult).length} />
      <SearchResultList searchResult={searchResult} />
    </PageWrapper>
  );
};

const PageWrapper = styled(VStack)`
  width: 1000px;
`;

export default SearchResultPage;
