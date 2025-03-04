import "./App.css";
import AuthCard from "./components/AuthCard";
import Button from "./components/Button";
import { ContextProvider } from "./contexts/Context";

function App() {
  return (
    <ContextProvider>
      <div>
        <Button />
        <AuthCard />
      </div>
    </ContextProvider>
  );
}
export default App;
