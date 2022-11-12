import styled from "@emotion/styled";
import React from "react";
import { fontSize, palette } from "@src/styles/styles";
import Link from "next/link";
import { BaseUrl } from "@src/constants/path";
import { Icon, Logo } from "@common-components";

const Navbar = () => {
  return (
    <Container>
      <Link href={BaseUrl.Base}>
        <a>
          <Logo />
        </a>
      </Link>
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
  position: fixed;
  top: 0px;
`;

export default Navbar;
