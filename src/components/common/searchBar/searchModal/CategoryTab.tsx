import styled from "@emotion/styled";
import { palette } from "@src/styles/styles";
import React from "react";
import { ICurrentTab } from ".";
import { IOption } from "../categoryDropdown";

export enum Categories {
  Recommend = "recommend",
  Popular = "popular",
  Recent = "recent",
}

export const categories: IOption[] = [
  { label: "추천 검색어", value: Categories.Recommend },
  { label: "인기 검색어", value: Categories.Popular },
  { label: "최근 검색어", value: Categories.Recent },
];

const CategoryTab = ({ currentTab, setCurrentTab }: ICurrentTab) => {
  // change current tab
  const handleTabClick = (category: IOption) => {
    setCurrentTab(category);
  };

  return (
    <Wrapper>
      {categories.map((category) => (
        <Tab
          key={category.label}
          className={
            category.label === currentTab.label ? "currentTab" : "otherTab"
          }
          onClick={() => handleTabClick(category)}
        >
          {category.label}
        </Tab>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid ${palette.gray.light};
`;

const Tab = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  // font-size: 1.2rem;

  &.currentTab {
    border-bottom: 1.5px solid ${palette.gray.dark};
    color: ${palette.green.primary};
    font-weight: 700;
  }
  &.otherTab {
    cursor: pointer;
    background-color: ${palette.gray.light};
    border: none;
    // font-size: 1rem;
    color: ${palette.gray.dark};
  }
`;

export default CategoryTab;
