import { ISearchQuery } from "../store/searchInput";

export interface ILocalStorage {
  name?: LocalStorageName | "";
  value?: ISearchQuery[] | string;
}

export enum LocalStorageName {
  RecentSearchList = "recentSearchList",
  AccessToken = "user_access_token",
  RefreshToken = "user_refresh_token",
}

export function emptyLocalStorage(name: LocalStorageName) {
  const emptyLocalStorage =
    getLocalStorage(name) !== "" ? JSON.parse(getLocalStorage(name) || "") : [];
  return emptyLocalStorage;
}

// get, set, delete localStorage
export function setLocalStorage({ name = "", value = "" }: ILocalStorage) {
  window.localStorage.setItem(name, JSON.stringify(value));
}

export function getLocalStorage(name: LocalStorageName) {
  const result = window.localStorage.getItem(name)
    ? window.localStorage.getItem(name)
    : "";
  return result;
}

export function deleteLocalStorage(name: LocalStorageName) {
  window.localStorage.removeItem(name);
}

export function deleteLocalStorageAll() {
  window.localStorage.clear();
}
