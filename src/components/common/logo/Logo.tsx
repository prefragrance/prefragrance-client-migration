import styled from "@emotion/styled";
import { fontSize, fontWeight, palette } from "@src/styles/styles";
import React from "react";

const Logo = () => {
  return (
    <LogoContainer>
      <LogoSpan color={palette.green.leftLogo}>취</LogoSpan>
      <LogoSpan color={palette.green.rightLogo}>향</LogoSpan>
    </LogoContainer>
  );
};

const LogoContainer = styled.div`
  letter-spacing: -10px;
`;

const LogoSpan = styled.span<{ color: string }>`
  font-family: "KoPubWorld_light", sans-serif;
  font-size: ${fontSize.extraBigText};
  font-weight: ${fontWeight.bold};
  color: ${({ color }) => color};
`;

export default Logo;
