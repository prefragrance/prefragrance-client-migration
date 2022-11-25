import React from "react";
import styled from "@emotion/styled";
import { palette } from "@src/styles/styles";
import { ICurrentCategory } from "@src/pages/search-result";

const categories = [
  "향수",
  "바디스프레이",
  "향초",
  "인센스",
  "비누/바디워시/샴푸",
  "핸드크림/워시",
];

const Categories = ({ currentCate, setCurrentCate }: ICurrentCategory) => {
  const handleCurrentCate = (e: React.MouseEvent) => {
    setCurrentCate((e.target as HTMLInputElement).textContent as string);
    // ! : non-null assertion -> null, undefined 일 경우는 없으니 계속 진행해라 -> husky에 걸림
  };

  return (
    <Container>
      {categories.map((category) => (
        <Item
          key={category}
          className={category === currentCate ? "currentCate" : ""}
          onClick={handleCurrentCate}
        >
          {category}
        </Item>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px 50px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
`;

const Item = styled.div`
  width: 200px;
  padding: 15px 0px;
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
