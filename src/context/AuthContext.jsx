import { createContext, useEffect, useState } from "react";

import { getAuthCookie, logoutUser, setAuthCookie } from "../utils/cookie";

export const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (token, userData) => {
    setAuthCookie(token, userData);
    setUser(userData);
  };

  const logout = () => {
    logoutUser();
    setUser(null);
  };

  useEffect(() => {
    const { user: data } = getAuthCookie();
    setUser(data);
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export default AuthProvider;
