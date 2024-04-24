import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import { RoutesPaths } from "./models/enums/RoutesPath";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <>
      <Routes>
        <Route path={RoutesPaths.Login} element={<Login />} />
      </Routes>
      <ToastContainer
        position="top-right"
        autoClose={3500}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
        draggable
        theme="colored"
      />
    </>
  );
}

export default App;
