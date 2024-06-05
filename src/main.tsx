import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./pages/Home/App.tsx";
import "./styles/global.css";
import { CreateProductPage } from "./pages/create-product";
import { EditProduct } from "./pages/editProduct/index.tsx";
import { PrivateLayout } from "./pages/_layouts/privateLayouts.tsx";
import { PublicLayout } from "./pages/_layouts/publicLayouts.tsx";
import { SignUp } from "./pages/signUp/index.tsx";
import { SignIn } from "./pages/signIn/index.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/create-product",
        element: <CreateProductPage />,
      },
      {
        path: "/edit-product/:id",
        element: <EditProduct />,
      },
    ],
  },
  {
    path: "/",
    element: <PublicLayout />,
    children: [
      {
        path: "sign-in",
        element: <SignIn />,
      },
      {
        path: "sign-up",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
