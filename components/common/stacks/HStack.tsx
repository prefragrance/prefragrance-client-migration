import React from "react";
import { IFlex } from "../../../common/types/styles";

const HStack = ({
  wrap = "flex-wrap",
  gap,
  justifyContent = "justify-center",
  alignItems = "items-center",
  children,
}: IFlex) => {
  return (
    <div
      className={`flex flex-row ${wrap} ${gap} ${justifyContent} ${alignItems}`}
    >
      {children}
    </div>
  );
};

export default HStack;
