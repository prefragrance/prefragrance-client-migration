import React from "react";
import { Icon } from "@common-components";
import { IconTheme, IIcon } from "../common/icon/Icon";
import { palette } from "@src/styles/styles";

interface IOutlinedIcon extends Pick<IIcon, "asButton" | "onClick"> {
  iconName: string;
  selected: boolean;
}

const OutlinedIcon = ({
  iconName,
  selected,
  asButton,
  onClick,
}: IOutlinedIcon) => {
  return (
    <Icon
      theme={IconTheme.Outlined}
      color={selected ? palette.green.primary : palette.gray.background}
      asButton={asButton}
      hoverColor={asButton ? palette.green.primary : ""}
      onClick={onClick}
      size={44}
    >
      {iconName}
    </Icon>
  );
};

export default OutlinedIcon;
