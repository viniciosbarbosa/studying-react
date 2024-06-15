import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Props = {
  children: ReactNode;
};

export const AuthMiddlewares = ({ children }: Props) => {
  const isAuth = true;

  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};
