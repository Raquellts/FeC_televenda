import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./presets.css";
import "./index.css";

//middlewares
import ProtectRoute from "./midleware/ProtectRoute";

//componentes
import Login from "./Login/index";
import Page404 from "./404/index";
import Home from "./Home/index";
import Form from "./Form/Index";
import GetLogin from "./getlogin/index";

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/GetLogin",
    element: <GetLogin />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
  {
    path: "/home",
    element: <Home />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/",
    element: <ProtectRoute Component={Home} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
