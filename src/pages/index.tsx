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
    <HomeWrapper gap="none">
      <BannerSection gap="lg">
        <Logo size="80px" spacing="-20px" />
        <Paragraph color={palette.white} style={{ marginLeft: "20px" }}>
          향기로 사람을 잇다.
        </Paragraph>
        <SearchBar />
      </BannerSection>
      <HomeSection gap="lg">
        <MagazineSection>
          <Magazine />
        </MagazineSection>
        <RecommendationSection>
          <Recommendation />
        </RecommendationSection>
        <BestReviewSection>
          <BestReview />
        </BestReviewSection>
      </HomeSection>
    </HomeWrapper>
  );
};

const HomeWrapper = styled(VStack)`
  width: 100%;
`;

const BannerSection = styled(VStack)`
  height: 400px;
  width: 100vw;
  background-color: ${palette.green.primary};
`;

const HomeSection = styled(VStack)`
  width: 1000px;
`;

const MagazineSection = styled(VStack)`
  height: 550px;
`;

const RecommendationSection = styled.div`
  height: 400px;
`;

const BestReviewSection = styled.div``;

export default Home;
