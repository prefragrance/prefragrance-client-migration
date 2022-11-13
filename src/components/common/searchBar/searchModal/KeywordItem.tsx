import React, { Dispatch, SetStateAction } from "react";
import { IOption } from "../categoryDropdown";
import Icon from "../../icon/Icon";
import { palette } from "@src/styles/styles";
import { Categories } from "./CategoryTab";
import styled from "@emotion/styled";
import useRecentSearch from "../useRecentSearch";

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

  // 최근검색어 개별 삭제 -> 검색어 바껴야하니까 recentUpdate + 1
  const onDeleteRecentKeyword = () => {
    deleteRecentSearchEach({ value: text });
    setRecentUpdate(recentUpdate + 1);
  };

  return (
    <Wrapper>
      <QuerySection>
        <Icon color={palette.gray.dark}>Search</Icon>
        <span>{text}</span>
      </QuerySection>
      <DeleteBtnSection disabled={currentTab.label !== Categories.Recent}>
        <Icon color={palette.gray.dark} onClick={onDeleteRecentKeyword}>
          Close
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
