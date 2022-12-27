import styled from "@emotion/styled";
import { RegisterStepLabel, RegisterSteps } from "@src/pages/register";
import { fontWeight, palette } from "@src/styles/styles";
import { BodyText } from "@src/styles/textComponents";
import { HStack, VStack } from "../common";
import Icon, { IconTheme } from "../common/icon/Icon";

interface IStepCircle {
  isCurrentStep: boolean;
}

interface IStep {
  step: RegisterSteps;
  currentStep: RegisterSteps;
}

const Step = ({ step, currentStep }: IStep) => {
  return (
    <HStack gap={"none"}>
      <StepCircle isCurrentStep={step === currentStep}>
        {step === RegisterSteps.Terms && (
          <Icon theme={IconTheme.Filled} color={palette.white} size={"40px"}>
            lock
          </Icon>
        )}
        {step === RegisterSteps.UserInfo && (
          <Icon theme={IconTheme.Filled} color={palette.white} size={"40px"}>
            description
          </Icon>
        )}
        {step === RegisterSteps.Done && (
          <Icon theme={IconTheme.Filled} color={palette.white} size={"40px"}>
            check
          </Icon>
        )}
      </StepCircle>
      <VStack gap={"xs"}>
        <BodyText fontWeight={fontWeight.bold}>0{step}</BodyText>
        <HDivider />
        <BodyText fontWeight={fontWeight.bold}>
          {RegisterStepLabel[step]}
        </BodyText>
      </VStack>
    </HStack>
  );
};

const StepCircle = styled.div<IStepCircle>`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: ${({ isCurrentStep }) =>
    isCurrentStep ? palette.green.primary : palette.gray.background};
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HDivider = styled.div`
  width: 140px;
  height: 1px;
  background-color: ${palette.gray.dark};
`;

export default Step;
