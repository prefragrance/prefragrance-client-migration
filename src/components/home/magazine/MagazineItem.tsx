import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { palette } from "@src/styles/styles";
import React from "react";
import Link from "next/link";

interface IMagazineItem {
  content: string;
  query: string;
}

const MagazineItem = (mag: IMagazineItem) => {
  console.log(mag);
  return (
    <Link href={`magazine/tags/${mag.query}`} key={mag.query}>
      <MagazineItemSection>
        <span>{mag.content}</span>
      </MagazineItemSection>
    </Link>
  );
};

const boxHover = keyframes`
  0% {font-size: 1rem;} 100% {font-size: 1.1rem;}
`;

const MagazineItemSection = styled.div`
  width: 300px;
  height: 170px;
  background-color: ${palette.green.primary};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  & > span {
    color: ${palette.white};
  }
  &:hover {
    animation: ${boxHover} 0.05s forwards ease-in;
  }
`;

export default MagazineItem;
