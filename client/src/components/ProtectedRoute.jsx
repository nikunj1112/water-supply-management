import { Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../utils/api";

export default function ProtectedRoute({ children }) {
  const [allowed, setAllowed] = useState(null);

  useEffect(() => {
    const check = async () => {
      try {
        const res = await api.get("/auth/check-login");
        setAllowed(res.data.loggedIn);
      } catch {
        setAllowed(false);
      }
    };
    check();
  }, []);

  if (allowed === null) {
    return <div className="min-h-screen flex items-center justify-center">Checking auth...</div>;
  }

  return allowed ? children : <Navigate to="/signin" replace />;
}
