import {
  Button,
  Input,
  LoadingSpinner,
  Select,
  VStack,
} from "@common-components";
import {
  LocalStorageName,
  setLocalStorage,
} from "@src/common/hooks/useLocalStorage";
import { checkLogin, currentUser } from "@src/common/store/user";
import { Gender, IRegisterPayload } from "@src/common/types/user";
import { RegisterSteps } from "@src/pages/register";
import { fontSize } from "@src/styles/styles";
import { Paragraph } from "@src/styles/textComponents";
import { useState } from "react";
import { useSetRecoilState } from "recoil";
import { ITerms } from "./Terms";
import { useRegister } from "./useRegister";

type IUserInfo = Pick<ITerms, "payload" | "handleChangeStep">;

type UserInfo = Pick<
  IRegisterPayload,
  | "age"
  | "email"
  | "gender"
  | "nickname"
  | "password1"
  | "password2"
  | "username"
>;

enum ValidateType {
  Username,
  Password,
  PasswordCheck,
  Email,
}

type ValidateProps = {
  inputValue: string;
  type: ValidateType;
  password1?: string;
  password2?: string;
};

const genderOptionList: Record<"label" | "value", string>[] = [
  { label: "남성", value: Gender.M },
  { label: "여성", value: Gender.F },
  { label: "Non-binary", value: Gender.NB },
];

const validate = ({
  inputValue,
  type,
  password1,
  password2,
}: ValidateProps) => {
  const usernameRegex = /^(?=.*[a-z])(?=.*\d)[a-z\d]{6,13}$/;
  const passwordRegex =
    /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{6,13}$/;
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

  switch (type) {
    case ValidateType.Username:
      return usernameRegex.test(inputValue);
    case ValidateType.Password:
      return passwordRegex.test(inputValue);
    case ValidateType.Email:
      return emailRegex.test(inputValue);
    case ValidateType.PasswordCheck:
      return password1 === password2;
  }
};

const UserInfo = ({ payload, handleChangeStep }: IUserInfo) => {
  const setIsLoggedIn = useSetRecoilState(checkLogin);
  const setCurrentUser = useSetRecoilState(currentUser);

  const [error, setError] = useState<boolean[]>(new Array(4).fill(false));
  const [userInfo, setUserInfo] = useState<UserInfo>({
    age: payload.age,
    email: payload.email,
    gender: payload.gender,
    nickname: payload.nickname,
    password1: payload.password1,
    password2: payload.password2,
    username: payload.username,
  });
  const { postRegister, isRegisterLoading } = useRegister({
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
      handleChangeStep(RegisterSteps.Done);
    },
  });

  const handleInputChange = (value: string | number, info: keyof UserInfo) => {
    setUserInfo({
      ...userInfo,
      [info]: value,
    });
  };

  const handleSubmit = () => {
    postRegister({
      ...payload,
      age: Number(userInfo.age),
      email: userInfo.email,
      gender: userInfo.gender,
      nickname: userInfo.nickname,
      password1: userInfo.password1,
      password2: userInfo.password2,
      username: userInfo.username,
    });
  };

  const handleBlur = ({
    inputValue,
    type,
    password1,
    password2,
  }: ValidateProps) => {
    if (!inputValue) {
      return;
    }

    const result = validate({ inputValue, type, password1, password2 });
    if (!result) {
      switch (type) {
        case ValidateType.Username:
          setError([true, false, false, false]);
          return;
        case ValidateType.Password:
          setError([false, true, false, false]);
          return;
        case ValidateType.Email:
          setError([false, false, false, true]);
          return;
        case ValidateType.PasswordCheck:
          setError([false, false, true, false]);
          return;
      }
    } else {
      setError([false, false, false, false]);
    }
  };

  if (isRegisterLoading) {
    return <LoadingSpinner />;
  }

  return (
    <VStack gap={"lg"}>
      <VStack gap={"sm"}>
        <Input
          labelText={"사용자 아이디를 입력해주세요."}
          value={userInfo.username}
          onChange={(value) => handleInputChange(value, "username")}
          placeholder={"6~13자의 영문 소문자와 숫자만 사용이 가능합니다."}
          padding={"10px 16px"}
          fontSize={fontSize.body}
          isRequired
          onBlur={(e) =>
            handleBlur({
              inputValue: e.target.value,
              type: ValidateType.Username,
            })
          }
          isError={error[0]}
          errorLabelText={
            "아이디는 6~13자의 영문 소문자와 숫자만 사용이 가능합니다."
          }
        />
        <Input
          labelText={"사용자 비밀번호를 입력해주세요."}
          type={"password"}
          value={userInfo.password1}
          onChange={(value) => handleInputChange(value, "password1")}
          placeholder={"영문, 숫자, 특수문자를 조합하여 6~13자로 작성해주세요."}
          padding={"10px 16px"}
          fontSize={fontSize.body}
          isRequired
          onBlur={(e) =>
            handleBlur({
              inputValue: e.target.value,
              type: ValidateType.Password,
            })
          }
          isError={error[1]}
          errorLabelText={
            "비밀번호는 6~13자의 최소 하나의 문자, 하나의 숫자 및 하나의 특수 문자를 사용해주셔야 합니다."
          }
        />
        <Input
          labelText={"비밀번호 확인"}
          type={"password"}
          value={userInfo.password2}
          onChange={(value) => handleInputChange(value, "password2")}
          placeholder={"비밀번호를 재입력해주세요."}
          padding={"10px 16px"}
          fontSize={fontSize.body}
          isRequired
          onBlur={(e) =>
            handleBlur({
              inputValue: e.target.value,
              type: ValidateType.PasswordCheck,
              password1: userInfo.password1,
              password2: userInfo.password2,
            })
          }
          isError={error[2]}
          errorLabelText={" 입력하신 비밀번호가 일치 하지 않습니다."}
        />
        <Input
          labelText={"사용자 닉네임을 입력해주세요."}
          value={userInfo.nickname}
          onChange={(value) => handleInputChange(value, "nickname")}
          placeholder={"사용자 닉네임"}
          padding={"10px 16px"}
          fontSize={fontSize.body}
        />
        <Input
          labelText={"이메일을 입력해주세요."}
          value={userInfo.email}
          onChange={(value) => handleInputChange(value, "email")}
          placeholder={"이메일"}
          padding={"10px 16px"}
          fontSize={fontSize.body}
          isRequired
          onBlur={(e) =>
            handleBlur({
              inputValue: e.target.value,
              type: ValidateType.Email,
            })
          }
          isError={error[3]}
          errorLabelText={"정확한 이메일주소를 입력해주세요."}
        />
        <Input
          labelText={"나이를 입력해주세요."}
          value={userInfo.age}
          onChange={(value) => handleInputChange(value, "age")}
          placeholder={"나이를 입력해주세요."}
          padding={"10px 16px"}
          fontSize={fontSize.body}
        />
        <VStack gap={"xs"} width={"100%"} alignItems={"flex-start"}>
          <Paragraph>성별을 입력해주세요.</Paragraph>
          <Select
            optionList={genderOptionList}
            width={"100%"}
            padding={"10px"}
            value={userInfo.gender}
            onSelect={(value) => handleInputChange(value, "gender")}
          />
        </VStack>
      </VStack>
      <Button
        text={"가입하기"}
        onClick={handleSubmit}
        disabled={error.includes(true)}
      />
    </VStack>
  );
};

export default UserInfo;
