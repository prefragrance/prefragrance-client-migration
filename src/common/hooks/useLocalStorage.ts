export interface ILocalStorage {
  name?: LocalStorageName | "";
  value?: string;
}

export enum LocalStorageName {
  RecentSearchList = "recentSearchList",
  LoginUser = "loginUser",
}

export function emptyLocalStorage(name: LocalStorageName) {
  const emptyLocalStorage =
    getLocalStorage(name) !== "" ? JSON.parse(getLocalStorage(name) || "") : [];
  return emptyLocalStorage;
}

// get, set, delete localStorage
export function setLocalStorage({ name = "", value = "" }: ILocalStorage) {
  window.localStorage.setItem(name, value);
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
