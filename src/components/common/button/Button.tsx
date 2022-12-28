import styled from "@emotion/styled";
import { palette } from "@src/styles/styles";
import React from "react";

interface IButton {
  width?: string;
  backgroundColor?: string;
  color?: string;
  fontWeight?: string;
  borderRadius?: string;
  text: string;
  onClick?: () => void;
  padding?: string;
  fontSize?: string;
  disabled?: boolean;
}

const Button = ({
  width = "200px",
  backgroundColor = palette.green.primary,
  color = palette.white,
  fontWeight,
  borderRadius = "5px",
  text,
  onClick,
  padding = "10px 12px",
  fontSize,
  disabled,
}: IButton) => {
  return (
    <StyledButton
      width={width}
      backgroundColor={backgroundColor}
      color={color}
      fontWeight={fontWeight}
      borderRadius={borderRadius}
      text={text}
      onClick={onClick}
      padding={padding}
      fontSize={fontSize}
      disabled={disabled}
    >
      {text}
    </StyledButton>
  );
};

const StyledButton = styled.button<IButton>`
  width: ${({ width }) => width};
  background-color: ${({ backgroundColor }) => backgroundColor};
  color: ${({ color }) => color};
  font-weight: ${({ fontWeight }) => fontWeight};
  border-radius: ${({ borderRadius }) => borderRadius};
  padding: ${({ padding }) => padding};
  font-size: ${({ fontSize }) => fontSize};
  text-align: center;
  :disabled {
    background-color: ${palette.gray.background};
    color: ${palette.gray.dark};
  }
`;

export default Button;
