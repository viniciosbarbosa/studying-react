import { Header } from "./components/Header";
import { UseSaveTodos } from "./hooks/UseSaveTodos";
import styles from "./App.module.css";
import { Todolist } from "./components/TodoList";

function App() {
  UseSaveTodos();

  return (
    <div className={styles.container}>
      <header>
        <Header />
      </header>

      <main>
        <Todolist />
      </main>
    </div>
  );
}

export default App;
