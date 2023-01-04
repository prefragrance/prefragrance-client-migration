import { calculateSize } from "@src/common/utils/calculateSize";
import { useState } from "react";
import Icon, { IconTheme } from "../icon/Icon";
import HStack from "../stacks/HStack";

interface IStarInput {
  color?: string;
  size?: number;
  value?: number;
  onClick: (value: number) => void;
}

const StarInput = ({ onClick, color, size }: IStarInput) => {
  const [rating, setRating] = useState<number[]>(new Array(5).fill(false));

  const handleClick = (value: number) => {
    setRating(
      new Array(value).fill(true).concat(new Array(5 - value).fill(false))
    );
    onClick(value);
  };

  return (
    <HStack gap={4} align={"flex-end"}>
      {rating.map((star, index) => (
        <div key={index}>
          {star && (
            <FullStar
              color={color}
              size={size}
              value={index + 1}
              onClick={handleClick}
            />
          )}
          {!star && (
            <EmptyStar
              color={color}
              size={size}
              value={index + 1}
              onClick={handleClick}
            />
          )}
        </div>
      ))}
    </HStack>
  );
};

const FullStar = ({ color, size, onClick, value }: IStarInput) => {
  return (
    <button value={value} onClick={() => onClick(value as number)}>
      <Icon size={calculateSize(size)} theme={IconTheme.Round} color={color}>
        star
      </Icon>
    </button>
  );
};

const EmptyStar = ({ color, size, onClick, value }: IStarInput) => {
  return (
    <button onClick={() => onClick(value as number)}>
      <Icon size={calculateSize(size)} theme={IconTheme.Round} color={color}>
        star_border
      </Icon>
    </button>
  );
};

export default StarInput;
