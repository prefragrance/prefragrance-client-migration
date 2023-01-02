import React, { useState, Suspense } from "react";
import dynamic from "next/dynamic";
import Categories from "@src/components/search-result/Categories";
import { useSearchQuery } from "@src/components/common/searchBar/useSearch";
import styled from "@emotion/styled";
import { VStack } from "@src/components/common";
import LoadingSpinner from "@src/components/common/loading-spinner/LoadingSpinner";

export interface ICurrentCategory {
  currentCate: string;
  setCurrentCate: React.Dispatch<React.SetStateAction<string>>;
}

const SearchResultList = dynamic(
  () => import("@src/components/search-result/SearchResultList"),
  { suspense: true }
);

const SearchResultPage = () => {
  const { searchResult } = useSearchQuery();
  const [currentCate, setCurrentCate] = useState<string>("향수");

  return (
    <CenterWrapper>
      <PageWrapper>
        <Categories currentCate={currentCate} setCurrentCate={setCurrentCate} />
        <Suspense fallback={<LoadingSpinner />}>
          <SearchResultList searchResult={searchResult} />
        </Suspense>
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
