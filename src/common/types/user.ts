export enum Gender {
  M = "M",
  F = "F",
  NB = "NB",
}
export interface IUser {
  id: number;
  username: string;
  email: string;
  nickname: string;
  name: string;
  age: number;
  gender: Gender;
  agree_prefragrance: boolean;
  agree_personal_required: boolean;
  agree_personal_optional: boolean;
}

export interface ILogin {
  username: string;
  password: string;
}

export interface ILoginResponse {
  access_token: string;
  refresh_token: string;
  user: IUser;
}

export interface ILogoutResponse {
  detail: string;
}

export interface ITokenRefreshResponse {
  access: string;
  access_token_expiration: Date;
}

export interface IRegisterPayload {
  username: string;
  email: string;
  password1: string;
  password2: string;
  nickname: string;
  name: string;
  age: number;
  gender: Gender;
  agree_prefragrance: boolean;
  agree_personal_required: boolean;
  agree_personal_optional: boolean;
}

export interface IRegisterResponse {
  access_token: string;
  refresh_token: string;
  user: IUser;
}
