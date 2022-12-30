import AuthApi from "@src/common/api/auth";
import { IRegisterResponse } from "@src/common/types/user";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

interface IUseRegister {
  onSuccess?: (data: IRegisterResponse) => void;
  onError?: (error: AxiosError) => void;
}

export const useRegister = ({ onSuccess, onError }: IUseRegister) => {
  const { mutate, isLoading } = useMutation(AuthApi.postRegister, {
    onSuccess: (data) => {
      onSuccess && onSuccess(data);
    },
    onError: (error: AxiosError) => {
      onError && onError(error);
    },
  });

  return { postRegister: mutate, isRegisterLoading: isLoading };
};
