import { HStack } from "@common-components";
import styled from "@emotion/styled";
import { BigTitle } from "@src/styles/textComponents";
import InfoBox from "./InfoBox";

const Recommendation = () => {
  return (
    <Wrapper>
      <Header align="space-between">
        <BigTitle>금주의 핫한 취향</BigTitle>
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
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px 0px;
  row-gap: 20px;
`;

const Header = styled(HStack)`
  width: 100%;
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
