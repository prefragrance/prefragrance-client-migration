import React from "react";
import styled from "@emotion/styled";
import { palette } from "@src/styles/styles";

interface IHDivider {
  backgroundColor?: string;
  height?: string;
  width?: string;
}

const HDivider = ({
  backgroundColor = palette.black,
  height = "1px",
  width = "100%",
}: IHDivider) => {
  return (
    <HorizontalDivider
      backgroundColor={backgroundColor}
      height={height}
      width={width}
    />
  );
};

const HorizontalDivider = styled.div<IHDivider>`
  background-color: ${({ backgroundColor }) => backgroundColor};
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;

export default HDivider;
