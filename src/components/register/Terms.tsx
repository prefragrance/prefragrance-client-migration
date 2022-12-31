import styled from "@emotion/styled";
import { IRegisterPayload } from "@src/common/types/user";
import { fontWeight, palette } from "@src/styles/styles";
import { BodyText } from "@src/styles/textComponents";
import { useState } from "react";
import { Button, CheckBox, HStack, VStack } from "@common-components";
import { RegisterSteps } from "@src/pages/register";
import Link from "next/link";
import { RouterUrl } from "@src/common/constants/path";

const useTermText = `o 개인정보의 수집ㆍ이용 목적 \n- 사이트 내 고객 정보 등록 및 계정 설정을 위한 목적\no 개인정보의 보유ㆍ이용 기간 \n- 원칙적으로 수집된 개인정보는 이용목적이 모두 달성되면 지체 없이 파기됩니다. 다만, 다른 법령에서 보관 의무를 정하고 있는 경우에는 그러한 규정에 따라 보관됩니다. 예를 들어 전자상거래 등에서의 소비자보호에 관한 법률에 따라 계약 또는 청약철회 등에 관한 기록과 대금결제 및 재화 등의 공급에 관한 기록은 5년간, 고객의 불만 또는 분쟁처리에 관한 기록은 3년간 보관됩니다.`;

const infoTermText = `o 수집 항목\n - 아이디, 비밀번호, 이름, 나이, 성별, 이메일\n o 보유 및 이용기간\n - 회원탈퇴 시 또는 법정의무 보유기간 까지`;

export interface ITerms {
  payload: IRegisterPayload;
  handleChangeRegisterPayload: (payload: IRegisterPayload) => void;
  handleChangeStep: (step: RegisterSteps) => void;
}

const Terms = ({
  payload,
  handleChangeRegisterPayload,
  handleChangeStep,
}: ITerms) => {
  const [checkTerms, setCheckTerms] = useState<
    Record<"useTerm" | "infoTerm", boolean>
  >({
    useTerm: payload.agree_prefragrance,
    infoTerm: payload.agree_personal_required,
  });

  const handleConfirm = () => {
    handleChangeRegisterPayload({
      ...payload,
      agree_prefragrance: checkTerms.useTerm,
      agree_personal_required: checkTerms.infoTerm,
    });
    handleChangeStep(RegisterSteps.UserInfo);
  };

  const handleCheckAll = () => {
    if (checkTerms.infoTerm === true && checkTerms.useTerm === true) {
      return setCheckTerms({ useTerm: false, infoTerm: false });
    }
    return setCheckTerms({ useTerm: true, infoTerm: true });
  };

  const handleCheckTerm = (type: "useTerm" | "infoTerm") => {
    switch (type) {
      case "useTerm":
        return setCheckTerms({ ...checkTerms, useTerm: !checkTerms.useTerm });
      case "infoTerm":
        return setCheckTerms({ ...checkTerms, infoTerm: !checkTerms.infoTerm });
    }
  };

  return (
    <VStack gap={"lg"}>
      <VStack alignItems={"flex-start"} gap={"md"}>
        <HStack>
          <CheckBox
            isChecked={checkTerms.infoTerm && checkTerms.useTerm}
            onClick={handleCheckAll}
          />
          <BodyText fontWeight={fontWeight.bold}>전체 동의</BodyText>
        </HStack>
        <Divider />
        <VStack alignItems={"flex-start"} gap={"xs"}>
          <HStack>
            <CheckBox
              isChecked={checkTerms.useTerm}
              onClick={() => handleCheckTerm("useTerm")}
            />
            <BodyText fontWeight={fontWeight.bold}>
              취향 이용약관 동의 (필수)
            </BodyText>
          </HStack>
          <TermText>{useTermText}</TermText>
        </VStack>
        <Divider />
        <VStack alignItems={"flex-start"} gap={"xs"}>
          <HStack>
            <CheckBox
              isChecked={checkTerms.infoTerm}
              onClick={() => handleCheckTerm("infoTerm")}
            />
            <BodyText fontWeight={fontWeight.bold}>
              개인정보 수집 및 이용 동의 (필수)
            </BodyText>
          </HStack>
          <TermText>{infoTermText}</TermText>
        </VStack>
        <BodyText>
          정보주체는 개인정보 수집 및 이용에 대한 동의를 거부할 수 있습니다.
          {"\n"}
          다만, 동의하지 않으실 경우 일부 서비스 이용이 제한됩니다.
        </BodyText>
      </VStack>
      <HStack gap={"sm"} alignItems={"center"}>
        <Link href={RouterUrl.Base}>
          <a>
            <Button text={"취소"} backgroundColor={palette.gray.dark} />
          </a>
        </Link>
        <Button
          text={"확인"}
          onClick={handleConfirm}
          disabled={!(checkTerms.useTerm && checkTerms.infoTerm)}
        />
      </HStack>
    </VStack>
  );
};

const Divider = styled.div`
  width: 100%;
  height: 1px;
  background-color: ${palette.gray.dark};
`;

const TermText = styled.div`
  width: 565px;
  height: 100px;
  padding: 15px;
  font-size: 12px;
  white-space: pre-wrap;
  overflow-y: auto;
  line-height: 18px;
  border: 1px solid ${palette.gray.light};
`;

export default Terms;
