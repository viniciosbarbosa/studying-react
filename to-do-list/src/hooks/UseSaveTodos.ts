import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { AES, enc } from "crypto-js";
import { Todo } from "../@types/Todo";

const SECRET_KEY = import.meta.env.VITE_SECRET_KEY as string;

const LOCAL_STORAGE_KEY = "TODOS_DATA_REACT";

export const UseSaveTodos = () => {
  const { state, dispatch } = useContext(TodoContext);

  const [gottedInitalData, setGottedInitalData] = useState(false);

  const handleChangesTodo = () => {
    if (!gottedInitalData) return;

    const value = AES.encrypt(JSON.stringify(state), SECRET_KEY);

    localStorage.setItem(LOCAL_STORAGE_KEY, value.toString());
  };

  useEffect(() => {
    try {
      const todoData = localStorage.getItem(LOCAL_STORAGE_KEY);

      if (todoData) {
        const bytes = AES.decrypt(todoData, SECRET_KEY);
        const decryptedData: Todo[] = JSON.parse(bytes.toString(enc.Utf8));
        dispatch({
          type: "ADD",
          payload: decryptedData,
        });
      }
    } catch {
      alert("Não foi possivel obter as tarefas salvas");
    }

    setGottedInitalData(true);
  }, []);

  useEffect(() => {
    handleChangesTodo();
  }, [state]);
};
