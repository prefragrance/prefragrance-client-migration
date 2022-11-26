import styled from "@emotion/styled";
import React from "react";
import { fontSize, palette } from "@src/styles/styles";
import Link from "next/link";
import { Icon, Logo } from "@common-components";
import { RouteUrl } from "@src/common/constants/path";
import SearchBar from "../common/searchBar";
const SearchNavbar = () => {
  return (
    <Container>
      <Link href={RouteUrl.Base}>
        <a>
          <Logo />
        </a>
      </Link>
      <SearchBar />
      <Icon color={palette.white} size={fontSize.extraBigText}>
        person
      </Icon>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  width: 100%;
  height: 80px;
  background-color: ${palette.green.primary};
`;

export default SearchNavbar;
