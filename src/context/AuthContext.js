import { createContext, useEffect, useState } from "react";

import { getAuthCookie, logoutUser, setAuthCookie } from "../utils/cookie";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [isLoadingCookie, setIsLoadingCookie] = useState(true);

  const login = (token, userData) => {
    setAuthCookie(token, userData);
    setToken(token);
    setUser(userData);
  };

  const logout = () => {
    logoutUser();
    setUser(null);
    setToken(null);
  };

  useEffect(() => {
    const { token, user: data } = getAuthCookie();
    setUser(data);
    setToken(token);
    setIsLoadingCookie(false);
  }, []);

  useEffect(() => {
    const logoutHandler = () => {
      logout();
    };
    window.addEventListener("auth:logout", logoutHandler);
    return () => {
      window.removeEventListener("auth:logout", logoutHandler);
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, login, logout, isLoadingCookie, token }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
