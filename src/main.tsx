import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./presets.css";
import "./index.css";

//middlewares
import ProtectRoute from "./midleware/ProtectRoute";

//componentes
//logins - no protected
import Login from "./Login/index";
import Page404 from "./404/index";
import Signin from "./SignIn";
import RecoveryPassword from "./recoverypassword";
import ForgotPassword from "./forgotpassword";

//protected
import { Pending, Suspended, Confirmed, Rejected, All } from "./Home/filters";
import Form from "./Form/Index";
import Order from "./Order/index";
import Users from "./Users";

//HashRoutes

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/recovery",
    element: <RecoveryPassword />,
  },
  {
    path: "/forgot",
    element: <ForgotPassword />,
  },
  {
    path: "*",
    element: <Page404 />,
  },
  {
    path: "/",
    element: <ProtectRoute component={All} />,
  },
  {
    path: "/Pending",
    element: <ProtectRoute component={Pending} />,
  },
  {
    path: "/Suspended",
    element: <ProtectRoute component={Suspended} />,
  },
  {
    path: "/Approved",
    element: <ProtectRoute component={Confirmed} />,
  },
  {
    path: "/Rejected",
    element: <ProtectRoute component={Rejected} />,
  },
  {
    path: "/form",
    element: <ProtectRoute component={Form} />,
  },
  {
    path: "/order",
    element: <ProtectRoute component={Order} />,
  },
  {
    path: "/Users",
    element: <ProtectRoute component={Users} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
