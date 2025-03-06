import { useContext, useEffect, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
const SECRET_KEY = import.meta.env.VITE_SECRENT_KEY as string;
const LOCAL_STORAGE_KEY = "TODOS_DATA";
import { AES, enc } from "crypto-js";
import { Todo } from "../../types/Todo";

export const useSaveTodos = () => {
  const [gottedInitialData, setGottedInitial] = useState(false);

  const { state, dispatch } = useContext(TodoContext);

  const handleChangesTodo = () => {
    if (!gottedInitialData) return;

    const value = AES.encrypt(JSON.stringify(state), SECRET_KEY);

    localStorage.setItem(LOCAL_STORAGE_KEY, value.toString());
  };

  //Pegando dados inicias
  useEffect(() => {
    try {
      const todoData = localStorage.getItem(LOCAL_STORAGE_KEY);
      if (todoData) {
        const bytes = AES.decrypt(todoData, SECRET_KEY);
        console.log(
          `Dados Brutos${bytes} , Dados JSONPARSE${JSON.parse(bytes.toString())} Dados final${JSON.parse(bytes.toString(enc.Utf8))} `
        );

        const decryptedData: Todo[] = JSON.parse(bytes.toString(enc.Utf8));
        dispatch({ type: "ADD", payload: decryptedData });
      }
    } catch {
      alert("Nao foi possivel obter dados do local storage");
    }
    setGottedInitial(true);
  }, []);

  useEffect(() => {
    //Monitorando todas as mudancas no todo
    handleChangesTodo();
  }, [state]);
};
