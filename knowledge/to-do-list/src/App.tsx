import "./App.css";
import { TodoContextProvider } from "./contexts/TodoContext";
import { useSaveTodos } from "./hooks/useSaveTodos";

function App() {
  useSaveTodos();

  return (
    <div>
      <TodoContextProvider></TodoContextProvider>
    </div>
  );
}

export default App;
