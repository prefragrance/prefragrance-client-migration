import AuthApi from "@src/common/api/auth";
import { RouterUrl } from "@src/common/constants/path";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";

interface IUseRegister {
  onSuccess?: () => void;
}

export const useRegister = ({ onSuccess }: IUseRegister) => {
  const router = useRouter();

  const { mutate, isLoading } = useMutation(AuthApi.postRegister, {
    onSuccess: () => {
      onSuccess && onSuccess();
    },
    onError: () => {
      alert("회원가입 실패");
      router.push(RouterUrl.Base);
    },
  });

  return { postRegister: mutate, isRegisterLoading: isLoading };
};
