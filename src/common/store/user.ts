import { atom } from "recoil";
import { IUser } from "../types/user";

export const currentUser = atom<IUser>({
  key: "current-user",
  default: {
    id: 0,
    username: "",
    email: "",
    nickname: "",
    name: "",
    age: 0,
    gender: "M",
    agree_prefragrance: false,
    agree_personal_required: false,
    agree_personal_optional: false,
  },
});

export const checkLogin = atom<boolean>({
  key: "check-login",
  default: false,
});
