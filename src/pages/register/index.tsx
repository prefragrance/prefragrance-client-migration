import { HStack, VStack } from "@common-components";
import { Gender, IRegisterPayload } from "@src/common/types/user";
import Done from "@src/components/register/Done";
import Step from "@src/components/register/Step";
import Terms from "@src/components/register/Terms";
import UserInfo from "@src/components/register/UserInfo";
import { BiggestText } from "@src/styles/textComponents";
import { useState } from "react";

export enum RegisterSteps {
  Terms = 1,
  UserInfo = 2,
  Done = 3,
}

export const RegisterStepLabel: Record<RegisterSteps, string> = {
  [RegisterSteps.Terms]: "이용약관 동의",
  [RegisterSteps.UserInfo]: "회원정보 입력",
  [RegisterSteps.Done]: "회원가입 완료",
};

const RegisterPage = () => {
  const [currentStep, setCurrentStep] = useState<RegisterSteps>(
    RegisterSteps.Terms
  );
  const [registerPayload, setRegisterPayload] = useState<IRegisterPayload>({
    username: "",
    email: "",
    password1: "",
    password2: "",
    nickname: "",
    name: "",
    age: 0,
    gender: Gender.M,
    agree_prefragrance: false,
    agree_personal_required: false,
    agree_personal_optional: false,
  });

  const handleChangeStep = (step: RegisterSteps) => {
    setCurrentStep(step);
  };

  const handleChangeRegisterPayload = (payload: IRegisterPayload) => {
    setRegisterPayload(payload);
  };

  return (
    <VStack alignItems={"center"} align={"center"} padding="100px" gap={"lg"}>
      <BiggestText>회원가입</BiggestText>
      <HStack gap={"none"}>
        <Step step={RegisterSteps.Terms} currentStep={currentStep} />
        <Step step={RegisterSteps.UserInfo} currentStep={currentStep} />
        <Step step={RegisterSteps.Done} currentStep={currentStep} />
      </HStack>
      <VStack padding={"30px 0px 0px 0px"}>
        {currentStep === RegisterSteps.Terms && (
          <Terms
            payload={registerPayload}
            handleChangeRegisterPayload={handleChangeRegisterPayload}
            handleChangeStep={handleChangeStep}
          />
        )}
        {currentStep === RegisterSteps.UserInfo && (
          <UserInfo
            payload={registerPayload}
            handleChangeStep={handleChangeStep}
          />
        )}
        {currentStep === RegisterSteps.Done && <Done />}
      </VStack>
    </VStack>
  );
};

export default RegisterPage;
