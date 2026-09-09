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
  };

  useEffect(() => {
    const { user: data } = getAuthCookie();
    setUser(data);
    setIsLoadingCookie(false);
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
