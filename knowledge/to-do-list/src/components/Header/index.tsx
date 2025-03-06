import { useContext, useState } from "react";
import { TodoContext } from "../../contexts/TodoContext";
import styles from "./Header.module.css";
import { Input } from "../Input";
import { Button } from "../Button";

export const Header = () => {
  const [inputValue, setInputValue] = useState("");

  const { dispatch } = useContext(TodoContext);

  const handleNewTask = () => {
    if (!inputValue) {
      alert("Digite um titulo");
      return;
    }
    dispatch({ type: "ADD", payload: { title: inputValue, isDone: false } });
    setInputValue("");
  };

  return (
    <div className={styles.container}>
      <div className={styles.brandContainer}>
        <img src="../../../public/brand.svg" alt="VINI LISTs" />
      </div>

      <div className={styles.newTaskContainer}>
        <div className={styles.newTaskInput}>
          <Input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <Button onClick={() => handleNewTask()} />
        </div>
      </div>
    </div>
  );
};
