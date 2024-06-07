// reducers/TodoReducer.ts
import { TodoActions, TodoState } from "../../@types/TodoReducer";

export const initialState: TodoState = [];

export const TodoReducer = (
  state: TodoState,
  action: TodoActions
): TodoState => {
  switch (action.type) {
    case "ADD":
      const { payload } = action;
      return Array.isArray(payload) ? payload : [...state, payload];
    case "CHANGE":
      return state.map((item, index) =>
        index === action.payload.index
          ? {
              ...item,
              ...action.payload,
            }
          : item
      );
    case "DELETE":
      return state.filter((_item, index) => index !== action.payload.index);
    default:
      return state;
  }
};
