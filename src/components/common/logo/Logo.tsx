import styled from "@emotion/styled";
import { fontSize, fontWeight, palette } from "@src/styles/styles";
import React from "react";

interface ILogo {
  size?: string;
  spacing?: string;
}

const Logo = ({ size = fontSize.extraBigText, spacing = "-10px" }: ILogo) => {
  return (
    <LogoContainer spacing={spacing}>
      <LogoSpan color={palette.green.leftLogo} size={size}>
        취
      </LogoSpan>
      <LogoSpan color={palette.green.rightLogo} size={size}>
        향
      </LogoSpan>
    </LogoContainer>
  );
};

const LogoContainer = styled.div<{ spacing: string }>`
  letter-spacing: ${({ spacing }) => spacing};
`;

const LogoSpan = styled.span<{ color: string; size: string }>`
  font-family: "KoPubWorld_light", sans-serif;
  font-size: ${({ size }) => size};
  font-weight: ${fontWeight.semiBold};
  color: ${({ color }) => color};
`;

export default Logo;
