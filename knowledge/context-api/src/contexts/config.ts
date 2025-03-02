import { ThemeAction } from "../types/ThemeReducer";
import { UserAction } from "../types/UserReducer";
import { userInitalState, userReducer } from "./reducers/UserReducer";
import { themeInitalState, themeReducer } from "./reducers/themeReducer";

//Exporting all inital states
export const InitalState = {
  theme: themeInitalState,
  user: userInitalState,
};
// Exporting all reducers
export const Reducers = (state: InitialStateType, action: ActionType) => ({
  theme: themeReducer(state.theme, action),
  user: userReducer(state.user, action),
});

// Exporting all types
export type InitialStateType = typeof InitalState;
export type ActionType = ThemeAction | UserAction;
