import styled from "@emotion/styled";
import { calculateSize } from "@src/common/utils/calculateSize";
import React from "react";

type HStackProps = {
  gap?: "none" | "xs" | "sm" | "md" | "lg" | number;
  align?: "flex-start" | "flex-end" | "space-between" | "center";
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center";
  wrap?: "wrap" | "no-wrap" | "wrap-reverse";
  padding?: string;
  className?: string;
  children: React.ReactNode;
};

const HStack = ({
  gap = "sm",
  align = "center",
  alignItems = "center",
  wrap = "no-wrap",
  padding = "0px",
  children,
  className,
}: HStackProps) => {
  const getGap = () => {
    switch (gap) {
      case "none":
        return "0rem";
      case "xs":
        return "0.5rem";
      case "sm":
        return "1rem";
      case "md":
        return "1.5rem";
      case "lg":
        return "2rem";
      default:
        throw new Error("invalid gap");
    }
  };

  return (
    <Container
      align={align}
      alignItems={alignItems}
      wrap={wrap}
      gap={typeof gap === "string" ? getGap() : calculateSize(gap)}
      padding={padding}
      className={className}
    >
      {children}
    </Container>
  );
};

const Container = styled.div<{
  gap: string;
  align: string;
  alignItems: string;
  wrap: string;
  padding: string;
}>`
  display: flex;
  justify-content: ${({ align }) => align};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({ wrap }) => wrap};
  gap: ${({ gap }) => gap};
  padding: ${({ padding }) => padding};
`;

export default HStack;
