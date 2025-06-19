import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
  theme: "light" | "dark";
}

const initalState: ThemeState = {
  theme: "light",
};

export const themeSlice = createSlice({
  name: "theme",
  initialState: initalState,
  reducers: {
    setTheme: (state, action: PayloadAction<ThemeState["theme"]>) => {
      state.theme = action.payload;
    },
  },
});

export const { setTheme } = themeSlice.actions;
export default themeSlice.reducer;
