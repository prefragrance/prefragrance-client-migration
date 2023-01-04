import styled from "@emotion/styled";
import { fontSize } from "@src/styles/styles";
import { Span } from "@src/styles/textComponents";
import { ChangeEventHandler } from "react";
import HStack from "../stacks/HStack";

interface ITextarea {
  value: string;
  onChange: ChangeEventHandler<HTMLTextAreaElement>;
  placeholder?: string;
  maxLength?: number;
}

const Textarea = ({ value, onChange, placeholder, maxLength }: ITextarea) => {
  return (
    <Wrapper>
      <TextareaInput
        rows={5}
        cols={50}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        maxLength={maxLength}
      />
      <HStack align={"flex-end"}>
        <Span>{`(${value.length} / ${maxLength})`}</Span>
      </HStack>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 5px;
`;

const TextareaInput = styled.textarea`
  font-size: ${fontSize.paragraph};
  border-radius: 5px;
  padding: 15px;
`;

export default Textarea;
