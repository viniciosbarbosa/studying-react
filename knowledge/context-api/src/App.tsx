import "./App.css";
import Button from "./components/Button";
import { ContextProvider } from "./contexts/Context";

function App() {
  return (
    <ContextProvider>
      <div>
        <Button />
      </div>
    </ContextProvider>
  );
}
export default App;
