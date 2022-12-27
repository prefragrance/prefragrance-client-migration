import { HStack, Icon, Logo, SearchBar } from "@common-components";
import styled from "@emotion/styled";
import AuthApi from "@src/common/api/auth";
import { RouterUrl } from "@src/common/constants/path";
import { useIsLoggedIn } from "@src/common/hooks/useAuth";
import { deleteLocalStorageAll } from "@src/common/hooks/useLocalStorage";
import { checkLogin, currentUser } from "@src/common/store/user";
import { fontSize, palette } from "@src/styles/styles";
import Link from "next/link";
import { useRouter } from "next/router";
import { useResetRecoilState } from "recoil";

enum NoneSearchBarUrl {
  Base = RouterUrl.Base,
  Login = RouterUrl.Login,
  Register = RouterUrl.Register,
}

const Navbar = () => {
  const router = useRouter();
  const isLoggedIn = useIsLoggedIn();

  return (
    <Container>
      <Link href={RouterUrl.Base}>
        <a>
          <Logo />
        </a>
      </Link>
      {!(router.pathname in NoneSearchBarUrl) && <SearchBar />}
      {(router.pathname in NoneSearchBarUrl) && <Blank />}
      <TemporaryAuthBox isLoggedIn={isLoggedIn} />
      <Icon color={palette.white} size={fontSize.extraBigText}>
        person
      </Icon>
    </Container>
  );
};

const TemporaryAuthBox = ({ isLoggedIn }: { isLoggedIn: boolean }) => {
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

  return (
    <>
      {!isLoggedIn && (
       <AuthArea>
          <HStack gap={"xs"}>
            <Link href={RouterUrl.Login}>
              <a>
                <AuthButton>로그인</AuthButton>
              </a>
            </Link>
            <Link href={RouterUrl.Register}>
              <a>
                <AuthButton>회원가입</AuthButton>
              </a>
            </Link>
          </HStack>
       </AuthArea>
      )}
      {isLoggedIn && <AuthArea><AuthButton onClick={handleLogout}>로그아웃</AuthButton></AuthArea>}
    </>
  );
};

const AuthButton = styled.button`
  width: 100px;
  padding: 10px 15px;
  border-radius: 4px;
  text-align: center;
  font-size: ${fontSize.body};
  color: ${palette.white};
`;

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  width: 100%;
  height: 80px;
  background-color: ${palette.green.primary};
`;
const AuthArea = styled.div`
  display: flex;
  justify-content: right;
`;
const Blank = styled.div`
  display: flex;
  justify-content: right;
  padding-left: 1000px;
`;
export default Navbar;
