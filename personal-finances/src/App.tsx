import { useEffect } from "react";
import { useAuth } from "./hooks/auth";

const app = () => {
  const { handleAuthenticateUser } = useAuth();

  useEffect(() => {
    handleAuthenticateUser();
  }, []);

  return <div>...</div>;
};

export default app;
