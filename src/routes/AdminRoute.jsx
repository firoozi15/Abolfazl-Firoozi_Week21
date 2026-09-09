import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const { user, isLoadingCookie, logout, token } = useContext(AuthContext);

  if (isLoadingCookie) return <h1>در حال بارگذاری</h1>;
  if (!user || !token) {
    logout();
    return <Navigate to="/login" />;
  }
  if (!user.isAdmin) return <Navigate to="/404" />;
  return children;
}

export default AdminRoute;
