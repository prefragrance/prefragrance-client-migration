import styled from "@emotion/styled";
import React from "react";
import InfoBox from "./InfoBox";
import { HStack } from "@common-components";
import { fontWeight } from "@src/styles/styles";
import { BigTitle } from "@src/styles/textComponents";

const Recommendation = () => {
  return (
    <>
      <Header align="space-between">
        <Title>금주의 핫한 취향</Title>
        <FilterUl>
          <li>리뷰순</li>
          <li>조회순</li>
        </FilterUl>
      </Header>
      <Body gap="md">
        <InfoBox />
        <InfoBox />
        <InfoBox />
        <InfoBox />
        <InfoBox />
      </Body>
    </>
  );
};

const Header = styled(HStack)`
  width: 100%;
`;

const Title = styled(BigTitle)`
  font-weight: ${fontWeight.bold};
`;

const FilterUl = styled.ul`
  display: flex;
  & > li::after {
    font-size: 1rem;
    content: "|";
    padding: 0 0.4rem;
  }
  & > li:last-child::after {
    content: "";
  }
`;

const Body = styled(HStack)`
  width: 100%;
`;

export default Recommendation;
