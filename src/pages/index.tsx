import styled from "@emotion/styled";
import { Logo, SearchBar, VStack } from "@common-components";
import BestReview from "@src/components/home/bestReview";
import Magazine from "@src/components/home/magazine";
import Recommendation from "@src/components/home/recommendation";
import { palette } from "@src/styles/styles";
import { Paragraph } from "@src/styles/textComponents";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <HomeWrapper gap={"none"}>
      <BannerSection gap="lg" padding="100px 0px">
        <Logo size="80px" spacing="-20px" />
        <Paragraph color={palette.white} style={{ marginLeft: "20px" }}>
          향기로 사람을 잇다.
        </Paragraph>
        <SearchBar />
      </BannerSection>
      <HomeSection gap="lg">
        <Magazine />
        <Recommendation />
        <BestReview />
      </HomeSection>
    </HomeWrapper>
  );
};

const HomeWrapper = styled(VStack)`
  width: 100%;
  height: 100%;
  min-width: 1000px;
`;

const BannerSection = styled(VStack)`
  height: 400px;
  width: 100%;
  flex: 1;
  background-color: ${palette.green.primary};
`;

const HomeSection = styled(VStack)`
  width: 100%;
  flex: 1;
  gap: 0px;
`;

export default Home;
