import AuthApi from "@src/common/api/auth";
import { RouterUrl } from "@src/common/constants/path";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/router";
import { IRegisterResponse } from "@src/common/types/user";

interface IUseRegister {
  onSuccess?: (data: IRegisterResponse) => void;
}

export const useRegister = ({ onSuccess }: IUseRegister) => {
  const router = useRouter();

  const { mutate, isLoading } = useMutation(AuthApi.postRegister, {
    onSuccess: (data) => {
      onSuccess && onSuccess(data);
    },
    onError: () => {
      alert("회원가입 실패");
      router.push(RouterUrl.Base);
    },
  });

  return { postRegister: mutate, isRegisterLoading: isLoading };
};
