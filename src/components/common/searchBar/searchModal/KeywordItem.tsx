import React, { Dispatch, SetStateAction } from "react";
import { IOption } from "../categoryDropdown";
import { palette } from "@src/styles/styles";
import { SearchModalCategoriesName } from "./CategoryTab";
import { Icon } from "@common-components";
import styled from "@emotion/styled";
import useRecentSearch from "../useRecentSearch";
import { useRouter } from "next/router";
import { RouterUrl } from "@src/common/constants/path";

interface IKeywordItem {
  text: string;
  currentTab: IOption;
  recentUpdate: number;
  setRecentUpdate: Dispatch<SetStateAction<number>>;
}

const KeywordItem = ({
  text,
  currentTab,
  recentUpdate,
  setRecentUpdate,
}: IKeywordItem) => {
  const { deleteRecentSearchEach } = useRecentSearch();
  const router = useRouter();

  // 최근검색어 개별 삭제 -> 검색어 바껴야하니까 recentUpdate + 1
  const onDeleteRecentKeyword = () => {
    deleteRecentSearchEach({ value: text });
    setRecentUpdate(recentUpdate + 1);
  };

  // 검색어블록 클릭했을 때도 검색되도록 함
  const submitSearchQuery = () => {
    router.push({
      pathname: RouterUrl.SearchResult,
      query: { search: text },
    });
  };

  return (
    <Wrapper onClick={submitSearchQuery}>
      <QuerySection>
        <Icon color={palette.gray.dark}>search</Icon>
        <span>{text}</span>
      </QuerySection>
      <DeleteBtnSection
        disabled={currentTab.value !== SearchModalCategoriesName.Recent}
      >
        <Icon color={palette.gray.dark} onClick={onDeleteRecentKeyword}>
          close
        </Icon>
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
    // align-items: center;
    line-height: 1.7rem;
  }
`;
const DeleteBtnSection = styled.div<{ disabled: boolean }>`
  height: 100%;
  cursor: pointer;
  display: ${({ disabled }) => (disabled ? "none" : "flex")};
  align-items: center;
`;

export default KeywordItem;
