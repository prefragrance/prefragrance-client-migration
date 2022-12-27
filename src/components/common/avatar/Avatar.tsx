import React from "react";
import styled from "@emotion/styled";
import { fontSize, palette } from "@src/styles/styles";
import logo from "/public/assets/images/취향로고.png";
import Image from "next/image";

interface AvatarProps {
  width?: string;
  height?: string;
  url?: string;
}

const Avatar = ({
  width = fontSize.body,
  height = fontSize.body,
  url = logo.src,
}: AvatarProps) => {
  return (
    <Container width={width} height={height}>
      <Image src={url} alt="Picture of me" layout="fill" />
    </Container>
  );
};

const Container = styled.div<AvatarProps>`
  display: inline-flex;
  align-items: center;
  position: relative;
  vertical-align: middle;
  overflow: hidden;
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  border-radius: 100%;
  background-color: ${palette.white};
`;

export default Avatar;
