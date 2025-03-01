import { useContext } from "react";
import { ThemeContext } from "../App";

const Card = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div
      style={{
        width: 400,
        height: 400,
        background: theme == "light" ? "white" : "black",
      }}
    >
      {theme}
    </div>
  );
};

export default Card;
