import {
  Button,
  Input,
  LoadingSpinner,
  Select,
  VStack,
} from "@common-components";
import { Gender, IRegisterPayload } from "@src/common/types/user";
import { RegisterSteps } from "@src/pages/register";
import { fontSize } from "@src/styles/styles";
import { Paragraph } from "@src/styles/textComponents";
import { useState } from "react";
import { ITerms } from "./Terms";
import { useRegister } from "./useRegister";

type IUserInfo = Pick<ITerms, "payload" | "handleChangeStep">;

type UserInfo = Pick<
  IRegisterPayload,
  | "age"
  | "email"
  | "gender"
  | "name"
  | "nickname"
  | "password1"
  | "password2"
  | "username"
>;

const genderOptionList: Record<"label" | "value", string>[] = [
  { label: "남성", value: Gender.M },
  { label: "여성", value: Gender.F },
  { label: "Non-binary", value: Gender.NB },
];

const UserInfo = ({ payload, handleChangeStep }: IUserInfo) => {
  const [userInfo, setUserInfo] = useState<UserInfo>({
    age: payload.age,
    email: payload.email,
    gender: payload.gender,
    name: payload.name,
    nickname: payload.nickname,
    password1: payload.password1,
    password2: payload.password2,
    username: payload.username,
  });
  const { postRegister, isRegisterLoading } = useRegister({
    onSuccess: () => handleChangeStep(RegisterSteps.Done),
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
      name: userInfo.name,
      nickname: "nickname",
      password1: userInfo.password1,
      password2: userInfo.password2,
      username: userInfo.username,
    });
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
        />
        <Input
          labelText={"사용자 이름을 입력해주세요."}
          value={userInfo.name}
          onChange={(value) => handleInputChange(value, "name")}
          placeholder={"사용자 이름"}
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
      <Button text={"가입하기"} onClick={handleSubmit} />
    </VStack>
  );
};

export default UserInfo;
