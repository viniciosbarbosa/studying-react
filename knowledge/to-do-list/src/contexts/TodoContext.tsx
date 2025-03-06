import { ReactNode, createContext, useReducer } from "react";
import { TodoActions, TodoState } from "../../types/TodoReducer";
import { TodoReducer, InitalState } from "./reducers/todoReducers";

type ContextType = {
  state: TodoState;
  dispatch: React.Dispatch<TodoActions>;
};

type Props = {
  children?: ReactNode;
};

export const TodoContext = createContext<ContextType>({
  state: InitalState,
  dispatch: () => null,
});

export const TodoContextProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(TodoReducer, InitalState);

  return (
    <TodoContext.Provider value={{ state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};
