import { ReactElement, ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

export const Card = ({ children }: Props) => {
  return <div>{children}</div>;
};
