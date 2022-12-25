import AuthApi from "@src/common/api/auth";
import {
  LocalStorageName,
  setLocalStorage,
} from "@src/common/hooks/useLocalStorage";
import { checkLogin, currentUser } from "@src/common/store/user";
import { useMutation } from "@tanstack/react-query";
import { useSetRecoilState } from "recoil";

const useLogin = () => {
  const setIsLoggedIn = useSetRecoilState(checkLogin);
  const setCurrentUser = useSetRecoilState(currentUser);

  const { mutate, isLoading } = useMutation(AuthApi.postLogin, {
    onSuccess: (data) => {
      setLocalStorage({
        name: LocalStorageName.AccessToken,
        value: data.access_token,
      });
      setLocalStorage({
        name: LocalStorageName.RefreshToken,
        value: data.refresh_token,
      });
      setIsLoggedIn(true);
      setCurrentUser(data.user);
    },
    onError: () => {
      alert("로그인 실패");
    },
  });

  return { postLogin: mutate, isLoginLoading: isLoading };
};

export default useLogin;
