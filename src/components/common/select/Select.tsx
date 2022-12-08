import React from "react";
import styled from "@emotion/styled";
import { palette } from "@src/styles/styles";
import { IOrderProps } from "@src/components/search-result/SelectTab";

const Select = ({ optionList }: { optionList: IOrderProps[] }) => {
  return (
    <SelectBox>
      {optionList &&
        optionList.map((option) => (
          <SelectOption key={option.label} value={option.value}>
            {option.label}
          </SelectOption>
        ))}
    </SelectBox>
  );
};

const SelectBox = styled.select`
  padding: 15px 10px;
  font-size: 1rem;
  border: 1px solid ${palette.gray.light};
  border-radius: 8px;
`;

const SelectOption = styled.option`
  &:hover {
    color: ${palette.white};
    background-color: ${palette.gray.lighter};
  }
`;

export default Select;
