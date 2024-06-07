import { Header } from "./components/Header";
import { UseSaveTodos } from "./hooks/UseSaveTodos";
import styles from "./App.module.css";

function App() {
  UseSaveTodos();

  return (
    <div className={styles.container}>
      <header>
        <Header />
      </header>
    </div>
  );
}

export default App;
