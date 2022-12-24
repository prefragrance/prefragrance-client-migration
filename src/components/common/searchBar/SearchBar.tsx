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
  } = useComponentVisible(); // 검색바 온오프 영역설정 커스텀 훅
  const { updateRecentSearch } = useRecentSearch(); // 최근검색어 훅에서 최근검색어 업데이트 함수 가져오기
  const [searchInput, setSearchInput] = useState<string>(""); // 검색어 쿼리 상태값
  const [category, setCategory] = useState<IOption>(categoryList[0]); // 통합검색/제품명/브랜드/키워드 확인 상태값
  const [recentUpdate, setRecentUpdate] = useState<number>(0); // 업데이트 여부 확인용 상태값
  const [currentTab, setCurrentTab] = useState<IOption>(
    SearchModalCategories[0]
  ); // 추천/인기/최근검색어 확인 상태값
  const router = useRouter();

  const handleSearchSubmit = () => {
    if (searchInput.trim().length === 0) {
      alert("검색어를 입력해주세요.");
      return;
    }
    updateRecentSearch({ value: searchInput }); // 최근검색어 업데이트
    setRecentUpdate(recentUpdate + 1); // 검색창 최신화
    router.push({
      // next router훅 사용해 검색결과페이지로 넘어감
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
        onKeyUp={(e) => {
          e.key == "Enter" && handleSearchSubmit(); // 엔터키로도 submit되도록 함
        }}
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
