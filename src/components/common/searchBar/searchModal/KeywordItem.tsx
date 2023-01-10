import React, { Dispatch, SetStateAction } from "react";
import { IOption } from "../categoryDropdown";
import { fontSize, palette } from "@src/styles/styles";
import { SearchModalCategoriesName } from "./CategoryTab";
import { Icon } from "@common-components";
import styled from "@emotion/styled";
import useRecentSearch from "../useRecentSearch";
import { useRouter } from "next/router";
import { RouterUrl } from "@src/common/constants/path";
import { useSetRecoilState } from "recoil";
import {
  getSearchQuerySelector,
  ISearchQuery,
} from "@src/common/store/searchInput";
import { categoryList } from "../categoryDropdown";
import { useSearchQuery } from "../useSearch";

interface IKeywordItem {
  query: ISearchQuery; // 이제 앞으로 쿼리는 문자열 배열이 아니라 ISearchQuery 배열임
  currentTab: IOption;
  recentUpdate: number;
  setRecentUpdate: Dispatch<SetStateAction<number>>;
}

const KeywordItem = ({
  query,
  currentTab,
  recentUpdate,
  setRecentUpdate,
}: IKeywordItem) => {
  const { deleteRecentSearchEach } = useRecentSearch();
  const router = useRouter();
  const setSearchParam = useSetRecoilState(getSearchQuerySelector);
  const { updateRecentSearch } = useRecentSearch();
  const { postSearchQuery } = useSearchQuery();

  // 최근검색어 개별 삭제 -> 검색어 바껴야하니까 recentUpdate + 1
  const onDeleteRecentKeyword = (event: React.MouseEvent<HTMLDivElement>) => {
    event?.stopPropagation(); // 삭제버튼 클릭 시 검색되는 이벤트 버블링 방지
    deleteRecentSearchEach(query);
    setRecentUpdate(recentUpdate + 1);
  };

  // 검색어블록 클릭했을 때도 검색되도록 함
  const submitSearchQuery = () => {
    setSearchParam({
      q_field: query.q_field,
      searchText: query.searchText,
    });
    updateRecentSearch({
      q_field: query.q_field,
      searchText: query.searchText,
    }); // 최근검색어 업데이트
    setRecentUpdate(recentUpdate + 1); // 검색창 최신화
    postSearchQuery();
    router.push({
      pathname: RouterUrl.SearchResult,
      query:
        query.q_field === "whole"
          ? { search: query.searchText }
          : { q_field: query.q_field, search: query.searchText },
    });
  };

  return (
    <Wrapper onClick={submitSearchQuery}>
      <QuerySection>
        <Icon color={palette.gray.dark}>search</Icon>
        <span>{query.searchText}</span>
        <span>
          {categoryList.find((ele) => ele.value == query.q_field)?.label}
        </span>
      </QuerySection>
      <DeleteBtnSection
        disabled={currentTab.value !== SearchModalCategoriesName.Recent}
        onClick={onDeleteRecentKeyword}
      >
        <Icon color={palette.gray.dark}>close</Icon>
      </DeleteBtnSection>
    </Wrapper>
  );
};

const Wrapper = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 13px 15px;
  cursor: pointer;
  &:hover {
    background-color: ${palette.gray.light};
  }
`;

const QuerySection = styled.div`
  gap: 0.5rem;
  display: flex;
  & > span {
    display: flex;
    font-size: ${fontSize.body};
    line-height: 1.7rem;
  }
  & > span:last-child {
    font-size: 0.5rem;
    color: ${palette.gray.dark};
  }
`;
const DeleteBtnSection = styled.div<{ disabled: boolean }>`
  height: 100%;
  cursor: pointer;
  display: ${({ disabled }) => (disabled ? "none" : "flex")};
  align-items: center;
`;

export default KeywordItem;
