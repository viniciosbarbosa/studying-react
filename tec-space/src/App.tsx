import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { RoutesPaths } from "./models/enums/RoutesPath";

function App() {
  return (
    <>
      <Routes>
        <Route path={RoutesPaths.Login} element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
