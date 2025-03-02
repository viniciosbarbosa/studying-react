export type ThemeState = {
  theme: "light" | "dark";
};

type ChangeTheme = {
  type: "CHANGE_THEME";
  payload: ThemeState["theme"];
};

export type ThemeAction = ChangeTheme;
