import React from "react";
import styled from "@emotion/styled";
import { palette } from "@src/styles/styles";
import { HStack } from "@src/components/common";
import { BigTitle } from "@src/styles/textComponents";
import { IOption } from "@src/components/common/searchBar/categoryDropdown";
// import { useSearchQuery } from "@src/components/common/searchBar/useSearch";
import { useRouter } from "next/router";
import { RouterUrl } from "@src/common/constants/path";
import { ICurrentCategory } from "@src/pages/search-result";

const productCategories: IOption[] = [
  { label: "전체", value: "" },
  { label: "향수", value: "perfume" },
  { label: "바디스프레이", value: "bodyspray" },
  { label: "향초", value: "scented-candle" },
  { label: "인센스", value: "insense" },
  { label: "비누/바디워시/샴푸", value: "soap/bodywash/shampoo" },
  { label: "핸드크림/워시", value: "handcream/wash" },
];

const Categories = ({ currentCate, setCurrentCate }: ICurrentCategory) => {
  const router = useRouter();

  const handleCurrentCate = (e: React.MouseEvent) => {
    setCurrentCate((e.target as HTMLInputElement).textContent as string);
    // 문제 2.
    router.push({
      pathname: RouterUrl.SearchResult,
      query:
        currentCate === "전체"
          ? { q_field: router.query.q_field, search: router.query.search }
          : {
              ...router.query,
              c: productCategories.find((c) => c.label === currentCate)?.value,
            },
    });
  };

  return (
    <>
      <CategoryWrapper>
        <BigTitle fontWeight={600} color={`${palette.green.primary}`}>
          카테고리
        </BigTitle>
      </CategoryWrapper>
      <ItemWrapper>
        <HStack>
          {productCategories.map((category) => (
            <Item
              key={category.label}
              className={category.label === currentCate ? "currentCate" : ""}
              onClick={handleCurrentCate}
            >
              {category.label}
            </Item>
          ))}
        </HStack>
      </ItemWrapper>
    </>
  );
};

const CategoryWrapper = styled.div`
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  border-bottom: 1px solid ${palette.gray.lighter};
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  overflow-x: scroll;
  position: relative;
  background-color: transparent;
  transition: background-color 0.5s;
  &::-webkit-scrollbar {
    height: 1.5rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1rem;
    background-clip: padding-box;
    border: 0.5rem solid transparent;
    background-color: inherit;
  }
  &::-webkit-scrollbar-thumb:hover {
    background-color: ${palette.gray.light};
  }
`;

const Item = styled.div`
  width: 10rem;
  padding: 1rem 0rem;
  border-radius: 5px;
  background-color: ${palette.gray.light};
  text-align: center;
  cursor: pointer;

  &.currentCate {
    background-color: ${palette.green.primary};
    color: ${palette.white};
  }
`;

export default Categories;
