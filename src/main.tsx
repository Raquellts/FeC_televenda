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
import Home from "./Home/index";
import Pending from "./Home/pending";
import Suspended from "./Home/suspended";
import Approved from "./Home/approved";
import Rejected from "./Home/rejected";
import Form from "./Form/Index";
import Users from "./Users";

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
    element: <ProtectRoute component={Home} />,
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
    element: <ProtectRoute component={Approved} />,
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
    path: "/Users",
    element: <ProtectRoute component={Users} />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
