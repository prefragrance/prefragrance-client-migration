import useSearch from "@src/components/common/searchBar/useSearch";
import React, { useState } from "react";
import Categories from "@src/components/search-result/Categories";
import { SelectTab } from "@src/components/search-result";
import SearchResultList from "@src/components/search-result/SearchResultList";

export interface ICurrentCategory {
  currentCate: string;
  setCurrentCate: React.Dispatch<React.SetStateAction<string>>;
}

const SearchResultPage = () => {
  const { useSearchQuery } = useSearch();
  const searchResult = useSearchQuery();
  console.log(searchResult);
  const [currentCate, setCurrentCate] = useState<string>("향수");

  return (
    <>
      <Categories currentCate={currentCate} setCurrentCate={setCurrentCate} />
      <SelectTab searchResultCount={Object(searchResult).length} />
      <SearchResultList searchResult={searchResult} />
    </>
  );
};

export default SearchResultPage;
