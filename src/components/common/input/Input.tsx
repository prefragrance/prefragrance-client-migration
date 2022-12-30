import styled from "@emotion/styled";
import { fontSize, palette } from "@src/styles/styles";
import React, { ChangeEventHandler, FocusEventHandler, useState } from "react";
import Icon from "../icon/Icon";

interface IInput {
  width?: string;
  height?: string;
  isError?: boolean;
  isClicked?: boolean;
  type?: "text" | "password" | "number" | "date" | "file";
  labelText?: string;
  isRequired?: boolean;
  errorLabelText?: string;
  placeholder?: string;
  value?: string | number;
  hasResetIcon?: boolean;
  padding?: string;
  onChange?: (value: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  fontSize?: string;
}

const Input = ({
  width = "480px",
  height,
  isError,
  type = "text",
  labelText,
  isRequired,
  errorLabelText,
  placeholder,
  value,
  hasResetIcon,
  padding = "10px 16px",
  fontSize = "1.125rem",
  onChange,
  onBlur,
}: IInput) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [inputValue, setInputValue] = useState<string>(value ? `${value}` : "");
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> | undefined = (
    e
  ) => {
    setIsClicked(true);
    setInputValue(e.target.value);
    onChange && onChange(e.target.value);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    onBlur && onBlur(e);
  };

  const handleReset = () => {
    setInputValue("");
  };

  return (
    <Container width={width} height={height}>
      {labelText && (
        <LabelText>
          {labelText}
          {isRequired && <span>*</span>}
        </LabelText>
      )}
      <InputContainer>
        <StyledInput
          type={
            type === "password" ? (isPasswordVisible ? "text" : type) : type
          }
          value={inputValue}
          placeholder={placeholder}
          isClicked={isClicked}
          isError={isError}
          onChange={handleChange}
          onBlur={handleBlur}
          width={width}
          height={height}
          padding={padding}
          fontSize={fontSize}
        />
        {hasResetIcon && (
          <IconContainer>
            <Icon color={palette.gray.dark} onClick={handleReset} asButton>
              cancel
            </Icon>
          </IconContainer>
        )}
        {type === "password" && (
          <IconContainer>
            <Icon
              color={palette.gray.dark}
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
              asButton
            >
              {isPasswordVisible ? "visibility_off" : "visibility"}
            </Icon>
          </IconContainer>
        )}
      </InputContainer>
      {isError && isClicked && (
        <LabelText color={palette.red.primary}>{errorLabelText}</LabelText>
      )}
    </Container>
  );
};

const Container = styled.div<{ width?: string; height?: string }>`
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height};
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const InputContainer = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input<{
  isError?: boolean;
  isClicked?: boolean;
  padding?: string;
  fontSize?: string;
}>`
  width: 100%;
  height: ${({ height }) => height};
  padding: ${({ padding }) => padding};
  border: 1px solid
    ${({ isError, isClicked }) =>
      isError && isClicked ? palette.red.primary : palette.gray.light};
  border-radius: 8px;
  font-size: ${({ fontSize }) => fontSize};
  line-height: ${fontSize.body};
  color: ${palette.black};

  &::placeholder {
    color: ${palette.gray.dark};
  }

  &:focus {
    border: 1px solid
      ${({ isError, isClicked }) =>
        isError && isClicked ? palette.red.primary : palette.black};
  }
`;

const LabelText = styled.span<{ color?: string }>`
  font-size: ${fontSize.paragraph};
  color: ${({ color = palette.black }) => color};

  & > span {
    color: ${palette.red.primary};
  }
`;

const IconContainer = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translate(0, -50%);
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
`;

export default Input;
