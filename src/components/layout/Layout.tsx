import styled from "@emotion/styled";
import React from "react";
import Navbar from "./Navbar";

interface ILayout {
  children: React.ReactNode;
}

const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Navbar />
      <PageContainer>{children}</PageContainer>
    </>
  );
};

const PageContainer = styled.section`
  width: 100%;
`;

export default Layout;
