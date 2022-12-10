import styled from "@emotion/styled";
import { fontWeight } from "@src/styles/styles";
import { BigTitle } from "@src/styles/textComponents";
import HStack from "../stacks/HStack";

const LoadingSpinner = () => {
  return (
    <Wrapper align={"center"} alignItems={"center"}>
      <BigTitle fontWeight={fontWeight.bold}>Loading...</BigTitle>
    </Wrapper>
  );
};

const Wrapper = styled(HStack)`
  height: calc(100vh - 80px);
`;

export default LoadingSpinner;
