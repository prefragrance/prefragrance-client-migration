import {
  Button,
  HStack,
  Icon,
  Logo,
  SearchBar,
  VStack,
} from "@common-components";
import styled from "@emotion/styled";
import AuthApi from "@src/common/api/auth";
import { RouterUrl } from "@src/common/constants/path";
import { useIsLoggedIn } from "@src/common/hooks/useAuth";
import { deleteLocalStorageAll } from "@src/common/hooks/useLocalStorage";
import { checkLogin, currentUser } from "@src/common/store/user";
import { fontSize, fontWeight, palette } from "@src/styles/styles";
import { BodyText } from "@src/styles/textComponents";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import { useResetRecoilState } from "recoil";

enum NoneSearchBarUrl {
  Base = RouterUrl.Base,
  Login = RouterUrl.Login,
  Register = RouterUrl.Register,
}

const Navbar = () => {
  const router = useRouter();
  const isLoggedIn = useIsLoggedIn();
  const [isBoxOpen, setIsBoxOpen] = useState<boolean>(false);
  const resetUser = useResetRecoilState(currentUser);
  const resetIsLoggedIn = useResetRecoilState(checkLogin);

  const handleLogout = async () => {
    try {
      await AuthApi.getLogout();
    } finally {
      deleteLocalStorageAll();
      resetUser();
      resetIsLoggedIn();
    }
  };

  const handleTriggerClick = () => {
    setIsBoxOpen(!isBoxOpen);
  };

  return (
    <Container>
      <Link href={RouterUrl.Base}>
        <a>
          <Logo />
        </a>
      </Link>
      {!(router.pathname in NoneSearchBarUrl) && <SearchBar />}
      <Trigger onClick={handleTriggerClick}>
        <Icon color={palette.white} size={fontSize.extraBigText} asButton>
          person
        </Icon>
        {isBoxOpen && (
          <Wrapper>
            <VStack gap={"xs"}>
              <BodyText fontWeight={fontWeight.bold}>최근 찾은 향</BodyText>
              <RecentSearchWrapper>
                <RecentSearchItem>product</RecentSearchItem>
                <RecentSearchItem>product</RecentSearchItem>
                <RecentSearchItem>product</RecentSearchItem>
              </RecentSearchWrapper>
              <HStack gap={5}>
                {isLoggedIn && (
                  <Button
                    text={"로그아웃"}
                    onClick={handleLogout}
                    padding={"5px 10px"}
                  />
                )}
                {!isLoggedIn && (
                  <>
                    <Link href={RouterUrl.Register}>
                      <a>
                        <Button
                          text={"회원가입"}
                          backgroundColor={palette.gray.medium}
                          padding={"5px 10px"}
                          width={"70px"}
                        />
                      </a>
                    </Link>
                    <Link href={RouterUrl.Login}>
                      <a>
                        <Button
                          text={"로그인"}
                          padding={"5px 10px"}
                          width={"70px"}
                        />
                      </a>
                    </Link>
                  </>
                )}
              </HStack>
            </VStack>
          </Wrapper>
        )}
      </Trigger>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  width: 100%;
  min-width: 1000px;
  height: 80px;
  background-color: ${palette.green.primary};
`;

const Trigger = styled.div`
  position: relative;
`;

const Wrapper = styled.div`
  width: 180px;
  height: 200px;
  position: absolute;
  top: 55px;
  left: -120px;
  background-color: ${palette.gray.background};
  border-radius: 8px;
  padding: 15px;
  z-index: 9999;

  ::after {
    border-top: 0px solid transparent;
    border-left: 8px solid transparent;
    border-right: 8px solid transparent;
    border-bottom: 8px solid ${palette.gray.background};
    content: "";
    position: absolute;
    top: -8px;
    left: 130px;
  }
`;

const RecentSearchWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  row-gap: 2px;
`;

const RecentSearchItem = styled.div`
  height: 35px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export default Navbar;
