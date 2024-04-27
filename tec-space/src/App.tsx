import { Route, Routes, useNavigate } from "react-router-dom";
import Login from "./pages/Login";
import { RoutesPaths } from "./models/enums/RoutesPath";
import { ToastContainer } from "react-toastify";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { auth } from "./firebase/FirebaseConection";
import Feed from "./pages/Feed";
import UserEmailContext from "./context/UserEmail";

function App() {
  const navigate = useNavigate();
  const [userEmail, setUserEmail] = useState("");

  console.log(auth);

  const checkLogin = () => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        user.providerData[0].email != null &&
          setUserEmail(user.providerData[0].email);
        navigate(RoutesPaths.Feed);
      } else {
        navigate(RoutesPaths.Login);
      }
    });
  };

  useEffect(() => {
    checkLogin();
  }, []);

  return (
    <UserEmailContext.Provider value={{ email: userEmail }}>
      <Routes>
        <Route path={RoutesPaths.Login} element={<Login />} />
        <Route path={RoutesPaths.Feed} element={<Feed />} />
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
    </UserEmailContext.Provider>
  );
}

export default App;
