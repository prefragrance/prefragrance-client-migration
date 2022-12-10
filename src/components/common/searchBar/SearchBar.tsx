import styled from "@emotion/styled";
import { RouterUrl } from "@src/common/constants/path";
import { useComponentVisible } from "@src/common/utils/useComponentVisible";
import { fontSize, palette } from "@src/styles/styles";
import { useRouter } from "next/router";
import React, { ChangeEvent, RefObject, useState } from "react";
import CategoryDropdown, { categoryList, IOption } from "./categoryDropdown";
import SearchModal from "./searchModal";
import { SearchModalCategories } from "./searchModal/CategoryTab";
import useRecentSearch from "./useRecentSearch";

export interface ISearchPayload {
  category: string;
  searchInput: string;
}

const SearchBar = () => {
  const {
    componentRef: modalRef,
    isVisible: isModalOpen,
    handleComponentVisible,
  } = useComponentVisible();
  const { updateRecentSearch } = useRecentSearch();
  const [searchInput, setSearchInput] = useState<string>("");
  const [category, setCategory] = useState<IOption>(categoryList[0]);
  const [recentUpdate, setRecentUpdate] = useState<number>(0);
  const [currentTab, setCurrentTab] = useState<IOption>(
    SearchModalCategories[0]
  );
  const router = useRouter();

  const handleSearchSubmit = () => {
    if (searchInput.trim().length === 0) {
      alert("검색어를 입력해주세요.");
      return;
    }
    updateRecentSearch({ value: searchInput });
    setRecentUpdate(recentUpdate + 1);
    router.push({
      pathname: RouterUrl.SearchResult,
      query:
        category.value === "whole"
          ? { search: searchInput }
          : { q_field: category.value, search: searchInput },
    });
  };

  return (
    <Container ref={modalRef as RefObject<HTMLDivElement>}>
      <CategoryDropdown category={category} setCategory={setCategory} />
      <Input
        type="text"
        placeholder={"향, 제품, 브랜드, 키워드를 검색해보세요!"}
        value={searchInput}
        onClick={handleComponentVisible}
        onChange={(e: ChangeEvent<HTMLInputElement>) =>
          setSearchInput(e.target.value)
        }
      />
      <SearchButton onClick={() => handleSearchSubmit()}>검색</SearchButton>
      {isModalOpen && (
        <SearchModal
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          recentUpdate={recentUpdate}
          setRecentUpdate={setRecentUpdate}
        />
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  border: none;
  position: relative;
`;

const Input = styled.input`
  width: 600px;
  height: 50px;
  font-family: "NotoSansKR_regular", sans-serif;
  padding-left: 20px;
  font-size: ${fontSize.smallTitle};
  color: ${palette.black};
`;

const SearchButton = styled.button`
  width: 100px;
  height: 50px;
  font-size: 1.1rem;
  border-radius: 0 0.8rem 0.8rem 0;
  background-color: ${palette.gray.light};
`;

export default SearchBar;
