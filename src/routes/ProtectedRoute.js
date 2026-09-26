import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { user, isLoadingCookie, token } = useContext(AuthContext);

  if (isLoadingCookie) return <h1>در حال بارگذاری</h1>;
  if (!user || !token) return <Navigate to="/login" />;

  return children;
}

export default ProtectedRoute;
