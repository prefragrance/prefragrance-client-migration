import styled from "@emotion/styled";
import { palette } from "@src/styles/styles";
import Icon, { IconTheme } from "../icon/Icon";

interface ICheckBox {
  width?: string;
  color?: string;
  isChecked: boolean;
  onClick?: () => void;
}

interface IContainer extends Pick<ICheckBox, "width" | "color"> {
  isChecked: boolean;
}

const CheckBox = ({
  width = "30px",
  color = palette.green.primary,
  isChecked,
  onClick,
}: ICheckBox) => {
  return (
    <Container
      width={width}
      isChecked={isChecked}
      color={color}
      onClick={onClick}
    >
      <Icon
        theme={IconTheme.Filled}
        color={isChecked ? color : palette.gray.background}
      >
        check
      </Icon>
    </Container>
  );
};

const Container = styled.div<IContainer>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: ${({ width }) => width};
  height: ${({ width }) => width};
  border-radius: 50%;
  border: ${({ isChecked, color }) =>
    isChecked ? `1px solid ${color}` : `1px solid ${palette.gray.background}`};
  cursor: pointer;
`;

export default CheckBox;
