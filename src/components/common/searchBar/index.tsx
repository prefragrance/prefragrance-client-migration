import styled from "@emotion/styled";
import SearchApi from "@src/common/api/search";
import { RouteUrl } from "@src/common/constants/path";
import { ISearchKeywords, ISearchResult } from "@src/common/types/search";
import { useComponentVisible } from "@src/common/utils/useComponentVisible";
import { fontSize, palette } from "@src/styles/styles";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/router";
import React, {
  ChangeEvent,
  FormEvent,
  MutableRefObject,
  useState,
} from "react";
import CategoryDropdown, { categoryList, IOption } from "./categoryDropdown";
import SearchModal from "./searchModal";
import { categories } from "./searchModal/CategoryTab";
import useRecentSearch from "./useRecentSearch";

export interface ISearchPayload {
  category: string;
  searchInput: string;
}

const SearchBar = () => {
  const router = useRouter();
  const {
    componentRef: modalRef,
    isVisible: isModalOpen,
    handleComponentVisible,
  } = useComponentVisible();
  const { updateRecentSearch } = useRecentSearch();
  const [searchInput, setSearchInput] = useState<string>("");
  const [category, setCategory] = useState<IOption>(categoryList[0]);
  const [recentUpdate, setRecentUpdate] = useState<number>(0);
  const [currentTab, setCurrentTab] = useState<IOption>(categories[0]);

  const useSearchQuery = ({ category, searchInput }: ISearchPayload) => {
    const { data, refetch } = useQuery<ISearchResult>(
      ["search"],
      () =>
        SearchApi.getSearchData({
          category: category,
          searchInput: searchInput,
        }),
      {
        initialData: {
          productName: "",
        },
        enabled: false,
        onSuccess: () => {
          setSearchInput("");
          router.push(RouteUrl.SearchResult);
        },
      }
    );

    return { data, refetch };
  };
  const { data: searchResult, refetch } = useSearchQuery({
    category: category.value,
    searchInput: searchInput,
  });

  const useSearchKeywordQuery = () => {
    const { data } = useQuery<ISearchKeywords>(
      ["search-keywords"],
      () => SearchApi.getSearchKeywords(currentTab.value),
      {
        initialData: {
          keywords: [],
        },
        enabled: false,
      }
    );

    return data;
  };
  const searchKeywords = useSearchKeywordQuery();

  const handleSearchSubmit = (e: FormEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (searchInput.trim().length === 0) {
      alert("검색어를 입력해주세요.");
      return;
    }
    updateRecentSearch({ value: searchInput });
    setRecentUpdate(recentUpdate + 1);
    refetch();
  };

  console.log(searchResult);

  return (
    <Form
      ref={modalRef as MutableRefObject<HTMLFormElement>}
      onSubmit={() => handleSearchSubmit}
    >
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
      <SearchButton type="submit">검색</SearchButton>
      {isModalOpen && (
        <SearchModal
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
          recentUpdate={recentUpdate}
          setRecentUpdate={setRecentUpdate}
          searchKeywords={searchKeywords}
        />
      )}
    </Form>
  );
};

const Form = styled.form`
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
