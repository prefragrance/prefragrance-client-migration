import { TimeType } from "@src/common/types/product";
import { HStack } from "@src/components/common";
import { useState } from "react";
import OutlinedIcon from "../outlined-icon";

interface ITime {
  asButton?: boolean;
  selectedValue?: TimeType;
  onClick?: (value: TimeType) => void;
}

const Time = ({ asButton, selectedValue, onClick }: ITime) => {
  const [clickedTime, setClickedTime] = useState<TimeType>(
    selectedValue ? selectedValue : TimeType.None
  );

  const handleClick = (value: TimeType) => {
    setClickedTime(value);
    onClick && onClick(value);
  };

  return (
    <HStack padding="10px 0px" gap={60}>
      <OutlinedIcon
        iconName={"light_mode"}
        asButton={asButton}
        selected={clickedTime === TimeType.Day}
        onClick={() => handleClick(TimeType.Day)}
      />
      <OutlinedIcon
        iconName={"bedtime"}
        asButton={asButton}
        selected={clickedTime === TimeType.Night}
        onClick={() => handleClick(TimeType.Night)}
      />
    </HStack>
  );
};

export default Time;
