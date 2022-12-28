import styled from "@emotion/styled";
import { palette } from "@src/styles/styles";
import React from "react";

const InfoBox = () => {
  return (
    <InfoSection>
      <Img src="" alt="img" />
      <Title>제품명</Title>
      <Brand>브랜드</Brand>
    </InfoSection>
  );
};

const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  margin: auto auto;
  gap: 0.5rem;
`;

const Img = styled.img`
  width: 180px;
  height: 250px;
  background-color: ${palette.gray.lighter};
`;

const Title = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
  margin-top: 0.25rem;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const Brand = styled.div`
  font-size: 0.8rem;
`;

export default InfoBox;
