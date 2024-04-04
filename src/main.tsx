import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./pages/Home/App.tsx";
import "./styles/global.css";
import { SideBar } from "./components/SideBar/index.tsx";
import { CreateProductPage } from "./pages/create-product";
import { EditProduct } from "./pages/editProduct/index.tsx";

const router = createBrowserRouter([
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
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <SideBar>
      <RouterProvider router={router} />
    </SideBar>
  </React.StrictMode>
);
