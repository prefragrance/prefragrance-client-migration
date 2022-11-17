import styled from "@emotion/styled";
import React from "react";
import Navbar from "./Navbar";
import SearchNavbar from "./SearchNavbar";
import { useRouter } from "next/router";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  const router = useRouter();
  if (router.route == "/") {
    return (
      <>
        <Navbar />
        <PageContainer>{children}</PageContainer>
      </>
    );
  } else {
    return (
      <>
        <SearchNavbar />
        <PageContainer>{children}</PageContainer>
      </>
    );
  }
};

const PageContainer = styled.section`
  width: 100%;
`;

export default Layout;
