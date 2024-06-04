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
import Pending from "./Home/pending";
import Suspended from "./Home/suspended";
import Approved from "./Home/approved";
import Rejected from "./Home/rejected";
import Form from "./Form/Index";
import GetLogin from "./GetLogin/index";
import Users from "./Users";

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
    path: "/Pending",
    element: <Pending />,
  },
  {
    path: "/Suspended",
    element: <Suspended />,
  },
  {
    path: "/Approved",
    element: <Approved />,
  },
  {
    path: "/Rejected",
    element: <Rejected />,
  },
  {
    path: "/form",
    element: <Form />,
  },
  {
    path: "/Users",
    element: <Users />,
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
