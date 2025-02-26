import { useState } from "react";
import { Card } from "./components/Card";

const App = () => {
  const [visible, setVisible] = useState(false);

  const handleClick = () => setVisible(!visible);

  return (
    <div>
      <button onClick={handleClick}>{visible ? "esconder" : "mostrar"}</button>

      {visible && <Card />}
    </div>
  );
};

export default App;
