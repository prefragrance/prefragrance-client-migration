export interface ILocalStorage {
  name?: string;
  value?: string;
}

// get, set, delete localStorage
export function setLocalStorage({ name = "", value = "" }: ILocalStorage) {
  window.localStorage.setItem(name, value);
}

export function getLocalStorage(name: string) {
  const result = window.localStorage.getItem(name)
    ? window.localStorage.getItem(name)
    : "";
  return result;
}

export function deleteLocalStorage(name: string) {
  window.localStorage.removeItem(name);
}
