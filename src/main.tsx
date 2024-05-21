import React from "react";
import ReactDOM from "react-dom/client";
import "./presets.css";

import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

//middlewares
import ProtectRoute from "./midleware/ProtectRoute";

//componentes
import Signin from "./SignIn/index";
import Login from "./Login/index";
import RecoveryPassword from "./recoverypassword/index";
import FogotPassword from "./forgotpassword/index";
import Page404 from "./404/index";
import Home from "./Home/index";

const router = createBrowserRouter([
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/recoverypassword",
    element: <RecoveryPassword />,
  },
  {
    path: "/forgotpassword",
    element: <FogotPassword />,
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
    path: "/",
    element: <ProtectRoute Component={Home} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
