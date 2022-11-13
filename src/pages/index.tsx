import styled from "@emotion/styled";
import { Logo, VStack } from "@src/components/common";
import SearchBar from "@src/components/common/searchBar";
import BestReview from "@src/components/home/bestReview";
import Magazine from "@src/components/home/magazine";
import Recommendation from "@src/components/home/recommendation";
import { palette } from "@src/styles/styles";
import { Paragraph } from "@src/styles/textComponents";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <>
      <BannerSection gap="lg">
        <Logo size="80px" spacing="-20px" />
        <Paragraph color={palette.white} style={{ marginLeft: "20px" }}>
          향기로 사람을 잇다.
        </Paragraph>
        <SearchBar />
      </BannerSection>
      <MagazineSection>
        <Magazine />
      </MagazineSection>
      <RecommendationSection>
        <Recommendation />
      </RecommendationSection>
      <BestReviewSection>
        <BestReview />
      </BestReviewSection>
    </>
  );
};

const BannerSection = styled(VStack)`
  height: 400px;
  background-color: ${palette.green.primary};
`;

const MagazineSection = styled(VStack)`
  height: 550px;
`;

const RecommendationSection = styled.div`
  height: 400px;
  display: grid;
  grid-template-rows: 1fr 6fr;
`;

const BestReviewSection = styled.div`
  height: 100%;
  display: grid;
  grid-template-rows: 50px auto;
  gap: 1rem;
`;

export default Home;
