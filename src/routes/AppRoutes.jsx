import { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { hydrateUserAction } from "../features/auth/state/authAction";
import { useDispatch } from "react-redux";
import AuthLayout from "../app/layouts/AuthLayout";
import PublicProtected from "./protected/PublicProtected";
import MainProtected from "./protected/MainProtected";
import LoginPage from "../features/auth/ui/pages/LoginPage";
import RegisterPage from "../features/auth/ui/pages/RegisterPage";
import MainLayout from "../app/layouts/MainLayout";
import HomePage from "../shared/ui/pages/HomePage";
import ProductPage from "../features/products/ui/pages/ProductPage";
import CartPage from "../features/cart/ui/pages/CartPage";
import OrderPage from "../features/orders/ui/pages/OrderPage";
import AboutPage from "../shared/ui/pages/AboutPage";

const AppRoutes = () => {
  let dispatch = useDispatch();
  useEffect(() => {
    (() => {
      try {
        dispatch(hydrateUserAction());
      } catch (error) {
        console.log("error in hydration", error);
      }
    })();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <PublicProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: <LoginPage />,
            },
            {
              path: "/register",
              element: <RegisterPage />,
            },
          ],
        },
      ],
    },
    {
      path: "/main",
      element: <MainProtected />,
      children: [
        {
          path: "",
          element: <MainLayout />,
          children: [
            {
              path: "",
              element: <HomePage />,
            },
            {
              path: "products",
              element: <ProductPage />,
            },
            {
              path: "cart",
              element: <CartPage />,
            },
            {
              path: "orders",
              element: <OrderPage />,
            },
            {
              path: "about",
              element: <AboutPage />,
            },
          ],
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
};

export default AppRoutes;
