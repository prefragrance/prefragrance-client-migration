import styled from "@emotion/styled";
import { Logo, VStack } from "@src/components/common";
import SearchBar from "@src/components/common/searchBar";
import { palette } from "@src/styles/styles";
import { Paragraph } from "@src/styles/textComponents";
import type { NextPage } from "next";
import React from "react";

const Home: NextPage = () => {
  return (
    <>
      <Banner gap="lg">
        <Logo size="80px" spacing="-20px" />
        <Paragraph color={palette.white} style={{ marginLeft: "20px" }}>
          향기로 사람을 잇다.
        </Paragraph>
        <SearchBar />
      </Banner>
    </>
  );
};

const Banner = styled(VStack)`
  height: 400px;
  background-color: ${palette.green.primary};
`;

export default Home;
