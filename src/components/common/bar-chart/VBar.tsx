import styled from "@emotion/styled";
import { calculateSize } from "@src/common/utils/calculateSize";
import { palette } from "@src/styles/styles";
import React from "react";

interface IVBar {
  width?: number;
  height?: number;
  backgroundColor?: string;
  value: number;
}

interface IContainer {
  width: number;
  height: number;
}

const VBar = ({
  width = 10,
  height = 95,
  backgroundColor = palette.green.primary,
  value,
}: IVBar) => {
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

const Bar = styled.div<IVBar>`
  width: ${({ width = 10 }) => calculateSize(width)};
  height: ${({ value, height = 95 }) =>
    calculateSize(Math.floor(value * (height / 100)))};
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
  position: absolute;
  bottom: 0;
  z-index: 1;
`;

export default VBar;
