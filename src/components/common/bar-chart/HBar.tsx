import styled from "@emotion/styled";
import { calculateSize } from "@src/common/utils/calculateSize";
import { palette } from "@src/styles/styles";
import React from "react";

interface IHBar {
  width?: number;
  height?: number;
  backgroundColor?: string;
  value: number;
}

interface IContainer {
  width: number;
  height: number;
}

const HBar = ({
  width = 300,
  height = 10,
  backgroundColor = palette.green.primary,
  value,
}: IHBar) => {
  return (
    <Container width={width} height={height}>
      <Bar value={value} backgroundColor={backgroundColor} height={height} />
    </Container>
  );
};

const Container = styled.div<IContainer>`
  width: ${({ width }) => calculateSize(width)};
  height: ${({ height }) => calculateSize(height)};
  background-color: ${palette.gray.lighter};
  border-radius: 10px;
  position: relative;
`;

const Bar = styled.div<IHBar>`
  width: ${({ value, width = 300 }) =>
    calculateSize(Math.floor(value * (width / 100)))};
  height: ${({ height }) => calculateSize(height)};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
  position: absolute;
  z-index: 1;
`;

export default HBar;
