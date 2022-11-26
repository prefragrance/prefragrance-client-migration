import { HStack, Input, VStack } from "@common-components";
import styled from "@emotion/styled";
import { RouteUrl } from "@src/common/constants/path";
import useLogin from "@src/components/login/useLogin";
import { fontSize, palette } from "@src/styles/styles";
import { Span } from "@src/styles/textComponents";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { postLogin } = useLogin();
  const router = useRouter();

  return (
    <HStack>
      <LeftContainer>이미지</LeftContainer>
      <RightContainer>
        <Form
          onSubmit={() => postLogin({ username: username, password: password })}
        >
          <VStack gap={24}>
            <Input
              placeholder={"Username"}
              hasResetIcon
              onChange={(value) => setUsername(value)}
            />
            <Input
              type={"password"}
              placeholder={"Password"}
              onChange={(value) => setPassword(value)}
            />
            <ButtonContainer>
              <ForgetPasswordButton>
                <Span>비밀번호를 잊으셨나요?</Span>
              </ForgetPasswordButton>
            </ButtonContainer>
          </VStack>
          <VStack gap={20}>
            <SubmitButton type={"submit"}>로그인</SubmitButton>
            <SubmitButton
              type={"button"}
              backgroundColor={palette.gray.dark}
              onClick={() => router.push(RouteUrl.Register)}
            >
              회원가입
            </SubmitButton>
          </VStack>
        </Form>
      </RightContainer>
    </HStack>
  );
};

const LeftContainer = styled.section`
  width: 60vw;
  height: calc(100vh - 80px);
  background-color: ${palette.gray.background};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const RightContainer = styled.section`
  width: 40vw;
  height: calc(100vh - 80px);
  background-color: ${palette.gray.light};
  padding: 150px 100px;
  padding-left: 0px;
`;

const Form = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 160px;
`;

const SubmitButton = styled.button<{ backgroundColor?: string }>`
  width: 330px;
  height: 60px;
  background-color: ${({ backgroundColor = palette.green.primary }) =>
    backgroundColor};
  color: ${palette.white};
  border-radius: 4px;
  text-align: center;
  font-size: ${fontSize.smallTitle};
`;

const ButtonContainer = styled.div`
  width: 100%;
  height: 20px;
  text-align: right;
`;

const ForgetPasswordButton = styled.button`
  line-height: 16px;

  &:hover {
    border-bottom: 1px solid ${palette.gray.dark};
  }
`;

export default LoginPage;
