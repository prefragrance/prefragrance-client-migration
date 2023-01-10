import styled from "@emotion/styled";
import { palette } from "@src/styles/styles";

interface ILoadingSpinner {
  width?: string;
  height?: string;
  backgroundColor?: string;
  color?: string;
  fontWeight?: string | number;
  fontSize?: string;
  text?: string;
  align?:
    | "flex-start"
    | "flex-end"
    | "space-between"
    | "center"
    | "space-evenly";
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
}

const LoadingSpinner = ({
  width = "100%",
  height = "100%",
  backgroundColor = palette.white,
  color = palette.black,
  fontWeight,
  fontSize,
  text = "Loading...",
  align = "center",
  alignItems = "center",
}: ILoadingSpinner) => {
  return (
    <Container
      align={align}
      alignItems={alignItems}
      width={width}
      color={color}
      height={height}
      backgroundColor={backgroundColor}
      fontSize={fontSize}
      fontWeight={fontWeight}
    >
      {text}
    </Container>
  );
};

const Container = styled.div<ILoadingSpinner>`
  display: flex;
  justify-content: ${({ align }) => align};
  align-items: ${({ alignItems }) => alignItems};
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  color: ${({ color }) => color};
  background-color: ${({ backgroundColor }) => backgroundColor};
  font-size: ${({ fontSize }) => fontSize};
  font-weight: ${({ fontWeight }) => fontWeight};
  text-align: center;
`;

export default LoadingSpinner;
