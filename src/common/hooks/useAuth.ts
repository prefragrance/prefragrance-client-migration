import { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import AuthApi from "../api/auth";
import { currentUser, checkLogin } from "../store/user";
import { getLocalStorage, LocalStorageName } from "./useLocalStorage";

export const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useRecoilState(checkLogin);

  const fetchUser = async () => {
    try {
      const token = getLocalStorage(LocalStorageName.RefreshToken);
      if (token) {
        const responseStatus = await AuthApi.verifyToken(token);
        setIsLoggedIn(responseStatus === 200);
      }
    } catch {
      setIsLoggedIn(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return isLoggedIn;
};

export const useCurrentUser = async () => {
  const user = useRecoilValue(currentUser);

  return user;
};
