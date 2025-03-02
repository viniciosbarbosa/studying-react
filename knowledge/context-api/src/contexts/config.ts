import { ThemeAction } from "../types/ThemeReducer";
import { themeInitalState, themeReducer } from "./reducers/themeReducer";

export const InitalState = {
  theme: themeInitalState,
};

export const Reducers = (state: InitialStateType, action: ActionType) => ({
  theme: themeReducer(state.theme, action),
});

export type InitialStateType = typeof InitalState;
export type ActionType = ThemeAction;
