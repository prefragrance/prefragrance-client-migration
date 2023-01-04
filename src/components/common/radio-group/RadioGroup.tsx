import styled from "@emotion/styled";
import { calculateSize } from "@src/common/utils/calculateSize";
import { palette } from "@src/styles/styles";
import { BodyText } from "@src/styles/textComponents";
import React, { useState } from "react";
import VStack from "../stacks/VStack";

export interface IRadioOption {
  label: string;
  value: number;
}

interface IRadioGroup {
  size?: number;
  selectedColor?: string;
  optionList: IRadioOption[];
  onChange: (value: number) => void;
}

type CircleProps = Pick<IRadioGroup, "size" | "selectedColor">;

const RadioGroup = ({
  size = 30,
  optionList,
  selectedColor = palette.green.primary,
  onChange,
}: IRadioGroup) => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleClick = (value: number) => {
    setSelected(value);
    onChange(value);
  };

  return (
    <Wrapper>
      {optionList.map((option) => (
        <VStack gap={10} key={option.value}>
          <OuterCircle size={size} onClick={() => handleClick(option.value)}>
            {selected === option.value && (
              <InnerCircle size={size} selectedColor={selectedColor} />
            )}
          </OuterCircle>
          <BodyText>{option.label}</BodyText>
        </VStack>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 10px 0px;
  column-gap: ${calculateSize(32)};
`;

const OuterCircle = styled.div<CircleProps>`
  background-color: ${palette.white};
  border-radius: 50%;
  border: 1px solid ${palette.black};
  width: ${({ size }) => calculateSize(size)};
  height: ${({ size }) => calculateSize(size)};
  position: relative;
  cursor: pointer;
`;

const InnerCircle = styled.div<CircleProps>`
  background-color: ${({ selectedColor }) => selectedColor};
  border-radius: 50%;
  width: ${({ size = 30 }) => calculateSize(size * 0.6)};
  height: ${({ size = 30 }) => calculateSize(size * 0.6)};
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default RadioGroup;
