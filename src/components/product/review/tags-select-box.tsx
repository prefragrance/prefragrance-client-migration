import styled from "@emotion/styled";
import { TagsType } from "@src/common/constants/colors";
import { calculateSize } from "@src/common/utils/calculateSize";
import { fontWeight, palette } from "@src/styles/styles";
import { useState } from "react";

interface ITag {
  label: string;
  color: string;
  value: TagsType;
}

const tagList: ITag[] = [
  {
    label: "따뜻한",
    color: palette.tags.babypink,
    value: TagsType.Warm,
  },
  {
    label: "산뜻한",
    color: palette.tags.babypink,
    value: TagsType.Fresh,
  },
  {
    label: "세련된",
    color: palette.tags.red,
    value: TagsType.Sophisticated,
  },
  {
    label: "섹시한",
    color: palette.tags.red,
    value: TagsType.Sexy,
  },
  {
    label: "무게감있는",
    color: palette.tags.gray,
    value: TagsType.Heavy,
  },
  {
    label: "모던한",
    color: palette.tags.gray,
    value: TagsType.Modern,
  },
  {
    label: "상큼한",
    color: palette.tags.yellow,
    value: TagsType.Citrusy,
  },
  {
    label: "싱그러운",
    color: palette.tags.yellow,
    value: TagsType.Refreshing,
  },
  {
    label: "스포티한",
    color: palette.tags.blue,
    value: TagsType.Spoty,
  },
  {
    label: "캐쥬얼한",
    color: palette.tags.blue,
    value: TagsType.Casual,
  },
  {
    label: "몽환적인",
    color: palette.tags.purple,
    value: TagsType.Dreamy,
  },
  {
    label: "은은한",
    color: palette.tags.purple,
    value: TagsType.Airy,
  },
  {
    label: "깔끔한",
    color: palette.tags.skyblue,
    value: TagsType.Neat,
  },
  {
    label: "청량한",
    color: palette.tags.skyblue,
    value: TagsType.Revitalizing,
  },
  {
    label: "사랑스러운",
    color: palette.tags.pink,
    value: TagsType.Lovely,
  },
  {
    label: "달콤한",
    color: palette.tags.pink,
    value: TagsType.Sweet,
  },
  {
    label: "강렬한",
    color: palette.tags.orange,
    value: TagsType.Strong,
  },
  {
    label: "화려한",
    color: palette.tags.orange,
    value: TagsType.Glamorous,
  },
];

interface ITagsSelectBox {
  payloadList: TagsType[] | [];
  onChange: (value: TagsType[]) => void;
}

interface ITagBox {
  selected: boolean;
  backgroundColor: string;
}

export const TagsSelectBox = ({ payloadList, onChange }: ITagsSelectBox) => {
  const [selectedList, setSelectedList] = useState<TagsType[]>(payloadList);

  const handleClick = (tag: ITag) => {
    if (selectedList.includes(tag.value)) {
      const newList = selectedList.filter((value) => value !== tag.value);
      setSelectedList(newList);
      onChange(newList);
      return;
    }
    const newList = [...selectedList, tag.value];
    setSelectedList(newList);
    onChange(newList);
  };

  return (
    <Wrapper>
      {tagList.map((tag) => (
        <TagBox
          onClick={() => handleClick(tag)}
          key={tag.label}
          selected={selectedList.includes(tag.value)}
          backgroundColor={tag.color}
        >
          {tag.label}
        </TagBox>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 472px;
  height: fit-content;
  background-color: ${palette.white};
  border: 1px solid ${palette.green.primary};
  padding: 10px 15px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  border-radius: 3px;
`;

const TagBox = styled.div<ITagBox>`
  width: 80px;
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${calculateSize(14)};
  background-color: ${({ selected, backgroundColor }) =>
    selected ? backgroundColor : palette.gray.background};
  font-weight: ${({ selected }) => selected && fontWeight.bold};
  border-radius: 3px;
  cursor: pointer;
`;
