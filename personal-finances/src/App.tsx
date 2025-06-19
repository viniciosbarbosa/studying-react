import { useEffect } from "react";
import { useAuth } from "./hooks/auth";
import { useTheme } from "./hooks/theme";

const App = () => {
  const { handleAuthenticateUser } = useAuth();
  const { handleInitTheme } = useTheme();

  useEffect(() => {
    handleAuthenticateUser();

    handleInitTheme();
  }, []);

  return <div>...</div>;
};

export default App;
