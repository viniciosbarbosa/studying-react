import { ActionType } from "./../config";
import { ThemeState } from "../../types/ThemeReducer";

export const themeInitalState: ThemeState = {
  theme: "light",
};

export const themeReducer = (
  state: ThemeState,
  action: ActionType
): ThemeState => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { theme: action.payload };

    default:
      return state;
  }
};
