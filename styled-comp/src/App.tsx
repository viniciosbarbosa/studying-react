import { ThemeProvider } from "styled-components";
import "./App.css";
import { Card } from "./components/Card";
import theme from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Card />
    </ThemeProvider>
  );
}

export default App;
