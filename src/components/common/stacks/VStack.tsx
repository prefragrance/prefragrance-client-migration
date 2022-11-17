import styled from "@emotion/styled";
import React from "react";

type VStackProps = {
  gap?: "none" | "xs" | "sm" | "md" | "lg";
  align?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-evenly";
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center";
  wrap?: "wrap" | "no-wrap" | "wrap-reverse";
  padding?: string;
  className?: string;
  children: React.ReactNode;
};

const VStack = ({
  align = "center",
  alignItems = "center",
  wrap = "no-wrap",
  gap = "sm",
  padding = "0px",
  children,
  className,
}: VStackProps) => {
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
      gap={getGap()}
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
  flex-direction: column;
  justify-content: ${({ align }) => align};
  align-items: ${({ alignItems }) => alignItems};
  flex-wrap: ${({ wrap }) => wrap};
  gap: ${({ gap }) => gap};
  padding: ${({ padding }) => padding};
`;

export default VStack;