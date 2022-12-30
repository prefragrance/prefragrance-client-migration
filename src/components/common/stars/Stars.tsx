import { calculateSize } from "@src/common/utils/calculateSize";
import { useEffect, useState } from "react";
import Icon, { IconTheme } from "../icon/Icon";
import HStack from "../stacks/HStack";

interface IStars {
  rate: number;
  size?: number;
  color?: string;
}

const Stars = ({ rate, size = 16, color }: IStars) => {
  const fullStarCount = Math.floor(rate);
  const halfStarCount = rate - fullStarCount > 0 ? 1 : 0;
  const emptyStarCount = 5 - fullStarCount - halfStarCount;
  const [stars, setStars] = useState<number[]>([]);

  useEffect(() => {
    if (halfStarCount > 0) {
      setStars(
        new Array(fullStarCount)
          .fill(1)
          .concat([0.5])
          .concat(new Array(emptyStarCount).fill(0))
      );
    } else {
      setStars(
        new Array(fullStarCount)
          .fill(1)
          .concat(new Array(emptyStarCount).fill(0))
      );
    }
  }, [rate, fullStarCount, halfStarCount, emptyStarCount]);

  return (
    <HStack gap={4} align={"flex-end"}>
      {stars.map((star, index) => (
        <div key={index}>
          {star === 1 && <FullStar color={color} size={size} />}
          {star === 0.5 && <HalfStar color={color} size={size} />}
          {star === 0 && <EmptyStar color={color} size={size} />}
        </div>
      ))}
    </HStack>
  );
};

const FullStar = ({ color, size }: Pick<IStars, "color" | "size">) => {
  return (
    <Icon size={calculateSize(size)} theme={IconTheme.Round} color={color}>
      star
    </Icon>
  );
};

const HalfStar = ({ color, size }: Pick<IStars, "color" | "size">) => {
  return (
    <Icon size={calculateSize(size)} theme={IconTheme.Round} color={color}>
      star_half
    </Icon>
  );
};

const EmptyStar = ({ color, size }: Pick<IStars, "color" | "size">) => {
  return (
    <Icon size={calculateSize(size)} theme={IconTheme.Round} color={color}>
      star_border
    </Icon>
  );
};

export default Stars;
