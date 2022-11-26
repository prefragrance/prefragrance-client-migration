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
  asButton?: boolean;
}

const Icon = ({
  theme = IconTheme.Filled,
  size = fontSize.mediumTitle,
  color = palette.green.primary,
  backgroundColor = "",
  onClick,
  children,
  asButton,
}: IIcon) => {
  return (
    <IconContainer
      className={theme}
      size={size}
      color={color}
      backgroundColor={backgroundColor}
      onClick={onClick}
      asButton={asButton}
    >
      {children}
    </IconContainer>
  );
};

interface IIconContainer {
  color: string;
  size: string;
  backgroundColor: string;
  asButton?: boolean;
}

const IconContainer = styled.span<IIconContainer>`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  vertical-align: middle;
  cursor: ${({ asButton }) => asButton && "pointer"};
`;

export default Icon;
