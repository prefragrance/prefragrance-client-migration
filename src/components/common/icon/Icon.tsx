import styled from "@emotion/styled";
import { fontSize, palette } from "@src/styles/styles";
import React from "react";

export enum IconTheme {
  Filled = "material-icons",
  Outlined = "material-icons-outlined",
}

interface IIcon {
  theme?: IconTheme;
  size?: string;
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
  children: React.ReactNode;
}

const Icon = ({
  theme = IconTheme.Filled,
  size = fontSize.mediumTitle,
  color = palette.green.primary,
  backgroundColor = "",
  onClick,
  children,
}: IIcon) => {
  return (
    <IconContainer
      className={theme}
      size={size}
      color={color}
      backgroundColor={backgroundColor}
      onClick={onClick}
    >
      {children}
    </IconContainer>
  );
};

interface IIconContainer {
  color: string;
  size: string;
  backgroundColor: string;
}

const IconContainer = styled.span<IIconContainer>`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  vertical-align: middle;
`;

export default Icon;
