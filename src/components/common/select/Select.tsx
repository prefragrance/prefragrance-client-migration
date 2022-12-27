import React, { ChangeEventHandler } from "react";
import styled from "@emotion/styled";
import { palette } from "@src/styles/styles";
import { IOrderProps } from "@src/components/search-result/SelectTab";

interface ISelect {
  placeHolder?: string;
  width?: string;
  optionList: IOrderProps[];
  padding?: string;
  value: string | number;
  onSelect?: (value: string) => void;
}

const Select = ({
  optionList,
  placeHolder,
  width,
  padding = "15px 10px",
  onSelect,
  value,
}: ISelect) => {
  const handleSelect: ChangeEventHandler<HTMLSelectElement> = (event) => {
    onSelect && onSelect(event.target.value);
  };

  return (
    <SelectBox
      placeholder={placeHolder}
      width={width}
      padding={padding}
      value={value}
      onChange={handleSelect}
    >
      {optionList &&
        optionList.map((option) => (
          <SelectOption key={option.label} value={option.value}>
            {option.label}
          </SelectOption>
        ))}
    </SelectBox>
  );
};

const SelectBox = styled.select<Pick<ISelect, "padding" | "width">>`
  padding: ${({ padding }) => padding};
  font-size: 1rem;
  border: 1px solid ${palette.gray.light};
  border-radius: 8px;
  width: ${({ width }) => width};
`;

const SelectOption = styled.option`
  &:hover {
    color: ${palette.white};
    background-color: ${palette.gray.lighter};
  }
`;

export default Select;
