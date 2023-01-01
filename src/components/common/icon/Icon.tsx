import styled from "@emotion/styled";
import { calculateSize } from "@src/common/utils/calculateSize";
import { fontSize, palette } from "@src/styles/styles";
import React from "react";

export enum IconTheme {
  Filled = "material-icons",
  Outlined = "material-icons-outlined",
  Round = "material-icons-round",
}

interface IIcon {
  theme?: IconTheme;
  size?: string | number;
  color?: string;
  backgroundColor?: string;
  onClick?: () => void;
  children: React.ReactNode;
  asButton?: boolean;
  rotateDeg?: number;
}

const Icon = ({
  theme = IconTheme.Filled,
  size = fontSize.mediumTitle,
  color = palette.green.primary,
  backgroundColor = "",
  onClick,
  children,
  asButton,
  rotateDeg,
}: IIcon) => {
  return (
    <IconContainer
      className={theme}
      size={typeof size === "string" ? size : calculateSize(size)}
      color={color}
      backgroundColor={backgroundColor}
      onClick={onClick}
      asButton={asButton}
      rotateDeg={rotateDeg}
    >
      {children}
    </IconContainer>
  );
};

const IconContainer = styled.span<
  Pick<IIcon, "color" | "size" | "backgroundColor" | "asButton" | "rotateDeg">
>`
  font-size: ${({ size }) => size};
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  vertical-align: middle;
  transform: ${({ rotateDeg }) => rotateDeg && `rotate(${rotateDeg}deg)`};
  cursor: ${({ asButton }) => asButton && "pointer"};
`;

export default Icon;
