import { Input, VStack } from "@common-components";
import styled from "@emotion/styled";
import { RouterUrl } from "@src/common/constants/path";
import { useIsLoggedIn } from "@src/common/hooks/useAuth";
import useLogin from "@src/components/login/useLogin";
import { fontSize, palette } from "@src/styles/styles";
import { BodyText, Span } from "@src/styles/textComponents";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginError, setLoginError] = useState<boolean>(false);
  const { postLogin } = useLogin({
    onError: () => setLoginError(true),
  });
  const isLoggedIn = useIsLoggedIn();
  const router = useRouter();

  if (isLoggedIn) {
    router.push(RouterUrl.Base);
  }

  return (
    <Container>
      <Image
        src={"/assets/images/login3.png"}
        layout={"fill"}
        objectFit={"cover"}
        alt={"login image"}
      />
      <RightContainer>
        <Form>
          <VStack gap={24} alignItems={"flex-start"}>
            <BodyText color={palette.red.primary}>
              {loginError ? "아이디 또는 비밀번호가 일치하지 않습니다." : " "}
            </BodyText>
            <Input
              placeholder={"아이디"}
              hasResetIcon
              onChange={(value) => setUsername(value)}
              padding={"20px"}
            />
            <Input
              type={"password"}
              placeholder={"비밀번호"}
              onChange={(value) => setPassword(value)}
              padding={"20px"}
            />
            <ButtonContainer>
              <ForgetPasswordButton>
                <Span color={palette.white}>
                  아이디 / 비밀번호를 잊으셨나요?
                </Span>
              </ForgetPasswordButton>
            </ButtonContainer>
          </VStack>
          <VStack gap={20}>
            <SubmitButton
              onClick={() =>
                postLogin({ username: username, password: password })
              }
            >
              로그인
            </SubmitButton>
            <Link href={RouterUrl.Register}>
              <a>
                <SubmitButton
                  type={"button"}
                  backgroundColor={palette.gray.dark}
                >
                  회원가입
                </SubmitButton>
              </a>
            </Link>
          </VStack>
        </Form>
      </RightContainer>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  height: calc(100vh - 80px);
  position: relative;
  display: flex;
`;

const RightContainer = styled.section`
  width: 40%;
  height: 100%;
  position: absolute;
  right: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Form = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 80px;
`;

const SubmitButton = styled.button<{ backgroundColor?: string }>`
  width: 300px;
  padding: 20px 30px;
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
