import React, { useState } from "react";
import Categories from "@src/components/search-result/Categories";
import { SelectTab } from "@src/components/search-result";
import SearchResultList from "@src/components/search-result/SearchResultList";
import { useSearchQuery } from "@src/components/common/searchBar/useSearch";

export interface ISearchResultData {
  id: number;
  product: string;
  star: string;
  producer: string;
  keyword: Array<string>;
  watch: number;
  comment: number;
  url?: string;
}

const searchResultData: ISearchResultData[] = [
  {
    id: 0,
    product: "랑방 에끌라 드 아르페쥬E",
    star: "4.6",
    producer: "LANVIN",
    keyword: ["시원", "플로", "상큼"],
    watch: 2345,
    comment: 23,
  },
  {
    id: 1,
    product: "랑방 에끌라 드 아르페쥬E",
    star: "4.6",
    producer: "LANVIN",
    keyword: ["시원", "플로", "상큼"],
    watch: 2345,
    comment: 23,
  },
  {
    id: 2,
    product: "랑방 에끌라 드 아르페쥬E",
    star: "4.6",
    producer: "LANVIN",
    keyword: ["시원", "플로", "상큼"],
    watch: 2345,
    comment: 23,
  },
];

export interface ICurrentCategory {
  currentCate: string;
  setCurrentCate: React.Dispatch<React.SetStateAction<string>>;
}

const SearchResultPage = () => {
  const { searchResult } = useSearchQuery();
  const [currentCate, setCurrentCate] = useState<string>("향수");
  console.log(searchResult);

  return (
    <>
      <Categories currentCate={currentCate} setCurrentCate={setCurrentCate} />
      <SelectTab searchResultCount={searchResultData.length} />
      <SearchResultList searchResultData={searchResultData} />
    </>
  );
};

export default SearchResultPage;
