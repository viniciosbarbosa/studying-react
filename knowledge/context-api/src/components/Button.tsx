import { useContext } from "react";
import { ThemeContext } from "../App";

const Button = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <div>
      <div> Meu Theme e {theme}</div>

      {theme == "light" ? (
        <button onClick={() => setTheme("dark")}>Mudar tema dark</button>
      ) : (
        <button onClick={() => setTheme("light")}>Mudar tema light</button>
      )}
    </div>
  );
};

export default Button;
