import { ReactNode, createContext, useReducer } from "react";
import { ActionType, InitalState, InitialStateType, Reducers } from "./config";

type Props = {
  children: ReactNode;
};

type ContextType = {
  state: InitialStateType;
  dispatch: React.Dispatch<ActionType>;
};

export const Context = createContext<ContextType>({
  state: InitalState,
  dispatch: () => null,
});

export const ContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(Reducers, InitalState);

  return (
    <Context.Provider value={{ state, dispatch }}>{children}</Context.Provider>
  );
};
