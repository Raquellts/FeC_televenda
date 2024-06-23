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
    element: <ProtectRoute element={<All />} />,
  },
  {
    path: "/Pending",
    element: <ProtectRoute element={<Pending />} />,
  },
  {
    path: "/Suspended",
    element: <ProtectRoute element={<Suspended />} />,
  },
  {
    path: "/Approved",
    element: <ProtectRoute element={<Confirmed />} />,
  },
  {
    path: "/Rejected",
    element: <ProtectRoute element={<Rejected />} />,
  },
  {
    path: "/form",
    element: <ProtectRoute element={<Form />} />,
  },
  {
    path: "/order",
    element: <ProtectRoute element={<Order />} />,
  },
  {
    path: "/Users",
    element: <ProtectRoute element={<Users />} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
