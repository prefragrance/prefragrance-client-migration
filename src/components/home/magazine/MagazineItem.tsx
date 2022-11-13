import { keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { palette } from "@src/styles/styles";
import React from "react";

interface IMagazineItem {
  text: string;
}

const MagazineItem = ({ text }: IMagazineItem) => {
  return (
    <MagazineItemSection>
      <span>{text}</span>
    </MagazineItemSection>
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
