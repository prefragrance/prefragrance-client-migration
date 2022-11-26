import useSearch from "@src/components/common/searchBar/useSearch";
import React from "react";

const SearchResultPage = () => {
  const { useSearchQuery } = useSearch();
  const searchResult = useSearchQuery();

  return <div>{searchResult.name}</div>;
};

export default SearchResultPage;
