import { createContext, useReducer } from "react";
import { TodoActions, TodoState } from "../@types/TodoReducer";
import { TodoReducer, initialState } from "./reducers/TodoReducer";

type Props = {
  children: React.ReactNode;
};

type ContextType = {
  state: TodoState;
  dispatch: React.Dispatch<TodoActions>;
};

export const TodoContext = createContext<ContextType>({
  state: initialState,
  dispatch: () => {},
});

export const TodoContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(TodoReducer, initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
