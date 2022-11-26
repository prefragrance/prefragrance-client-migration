import AuthApi from "@src/common/api/auth";
import { RouteUrl } from "@src/common/constants/path";
import {
  LocalStorageName,
  setLocalStorage,
} from "@src/common/hooks/useLocalStorage";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

const useLogin = () => {
  const router = useRouter();

  const { mutate } = useMutation(AuthApi.postLogin, {
    onSuccess: (data) => {
      setLocalStorage({
        name: LocalStorageName.LoginUser,
        value: JSON.stringify(data),
      });
      router.replace(RouteUrl.Base);
    },
    onError: () => {
      alert("로그인 실패");
    },
  });

  return { postLogin: mutate };
};

export default useLogin;
