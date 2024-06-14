import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import { Product } from "./pages/Product";
import { Products } from "./pages/Products";

function App() {
  return (
    <div>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/about" element={<About />} />

        <Route path="/products">
          <Route index element={<Products />} />
          <Route path=":id" element={<Product />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
