import { useContext, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useRouter } from "next/router";

function ProtectedRoute({ children }) {
  const router = useRouter();
  const { user, isLoadingCookie, token } = useContext(AuthContext);

  useEffect(() => {
    if (isLoadingCookie) return;

    if (!user || !token) {
      router.replace("/Login");
    }
  }, [user, token, isLoadingCookie, router]);

  if (isLoadingCookie) {
    return <h1>در حال بارگذاری</h1>;
  }

  if (!user || !token) {
    return null;
  }

  return children;
}

export default ProtectedRoute;
