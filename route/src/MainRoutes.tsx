import Home from "./pages/Home";
import About from "./pages/About";
import { Product } from "./pages/Product";
import { Products } from "./pages/Products";
import { NotFoundPage } from "./pages/NotFoundPage";
import { AuthMiddlewares } from "./middlewares/AuthMiddleWares";
import { Login } from "./pages/Login";
import { Outlet, Route, Routes, useRoutes } from "react-router-dom";

/*
export const MainRoutes = () => (
  <Routes>
    <Route path="*" element={<NotFoundPage />} />
    <Route index element={<Home />} />
    <Route path="/about" element={<About />} />

    <Route
      path="/products"
      element={
        <AuthMiddlewares>
          <Outlet />
        </AuthMiddlewares>
      }
    >
      <Route index element={<Products />} />
      <Route path=":id" element={<Product />} />
    </Route>

    <Route path="/login" element={<Login />} />
  </Routes>
);*/

export const MainRoutes = () => {
  const element = useRoutes([
    {
      index: true,
      element: <Home />,
    },
    {
      path: "/about",
      element: <About />,
    },
    {
      path: "products",
      element: (
        <AuthMiddlewares>
          <Outlet />
        </AuthMiddlewares>
      ),
      children: [
        {
          index: true,
          element: <Products />,
        },
        {
          path: ":id",
          element: <Product />,
        },
      ],
    },
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "*",
      element: <NotFoundPage />,
    },
  ]);

  return element;
};
