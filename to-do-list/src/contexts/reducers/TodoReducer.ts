import { TodoActions, TodoState } from "../../@types/TodoReducer";

export const initalState: Array<TodoState> = [];

export const TodoReducer = (
  state: TodoState,
  action: TodoActions
): TodoState => {
  switch (action.type) {
    case "ADD":
      const { payload } = action;
      return !Array.isArray(payload) ? [...state, payload] : payload;
    case "CHANGE":
      const chagedTodos = state.map((item, key) => {
        if (key === action.payload.index) {
          item.title = action.payload.title ?? item.title;
          item.isDone = action.payload.isDone ?? item.isDone;
        }
        return item;
      });

      return chagedTodos;
    case "DELETE":
      return state.filter((_item, key) => key !== action.payload.index);

    default:
      return state;
  }
};
