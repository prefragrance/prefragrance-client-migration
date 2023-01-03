import { SeasonType } from "@src/common/types/product";
import { HStack } from "@src/components/common";
import { useState } from "react";
import OutlinedIcon from "../outlined-icon";

interface ISeason {
  asButton?: boolean;
  selectedValue?: SeasonType;
  onClick?: (value: SeasonType) => void;
}

const Season = ({ asButton, selectedValue, onClick }: ISeason) => {
  const [clickedSeason, setClickedSeason] = useState<SeasonType>(
    selectedValue ? selectedValue : SeasonType.None
  );

  const handleClick = (value: SeasonType) => {
    setClickedSeason(value);
    onClick && onClick(value);
  };

  return (
    <HStack padding="10px 0px" gap={32}>
      <OutlinedIcon
        iconName={"filter_vintage"}
        asButton={asButton}
        selected={clickedSeason === SeasonType.Spring}
        onClick={() => handleClick(SeasonType.Spring)}
      />
      <OutlinedIcon
        iconName={"beach_access"}
        asButton={asButton}
        selected={clickedSeason === SeasonType.Summer}
        onClick={() => handleClick(SeasonType.Summer)}
      />
      <OutlinedIcon
        iconName={"eco"}
        asButton={asButton}
        selected={clickedSeason === SeasonType.Autumn}
        onClick={() => handleClick(SeasonType.Autumn)}
      />
      <OutlinedIcon
        iconName={"ac_unit"}
        asButton={asButton}
        selected={clickedSeason === SeasonType.Winter}
        onClick={() => handleClick(SeasonType.Winter)}
      />
    </HStack>
  );
};

export default Season;
