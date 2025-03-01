import { createContext, useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Card from "./components/Card";

type ThemeContextType = {
  theme: string;
  setTheme: (value: string) => void;
};

export const ThemeContext = createContext<ThemeContextType>({
  theme: "",
  setTheme: () => {},
});

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <Card />
        <Button />
      </ThemeContext.Provider>
    </>
  );
}
export default App;
