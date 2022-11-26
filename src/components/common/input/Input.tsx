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
  onChange?: (value: string) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

const Input = ({
  width = "480px",
  height = "70px",
  isError,
  type = "text",
  labelText,
  isRequired,
  errorLabelText,
  placeholder,
  value,
  hasResetIcon,
  onChange,
  onBlur,
}: IInput) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);
  const [isValueReset, setIsValueReset] = useState<boolean>(false);
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> | undefined = (
    event
  ) => {
    setIsValueReset(false);
    setIsClicked(true);
    onChange && onChange(event.target.value);
  };

  const handleBlur: FocusEventHandler<HTMLInputElement> = (e) => {
    onBlur && onBlur(e);
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
          type={type}
          value={isValueReset ? "" : value}
          placeholder={placeholder}
          isClicked={isClicked}
          isError={isError}
          onChange={handleChange}
          onBlur={handleBlur}
        />
        {hasResetIcon && (
          <IconContainer>
            <Icon
              color={palette.gray.dark}
              onClick={() => setIsValueReset(true)}
              asButton
            >
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
}>`
  width: 100%;
  height: 70px;
  padding: 10px 16px;
  border: 1px solid
    ${({ isError, isClicked }) =>
      isError && isClicked ? palette.red.primary : palette.gray.light};
  border-radius: 8px;
  font-size: ${fontSize.smallTitle};
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
