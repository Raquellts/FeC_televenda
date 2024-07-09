import React, { useEffect, useState } from "react";
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
import Loading from "./components/backgrounds/loadingBack";
import { themes } from "./themeConsts";

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

// eslint-disable-next-line react-refresh/only-export-components
const App = () => {
  const [isReady, setIsReady] = useState(false);
  const [componentsLoaded, setComponentsLoaded] = useState(false);

  const handleLoading = () => {
    setIsReady(true);
  };

  useEffect(() => {
    window.addEventListener("load", handleLoading);
    setTimeout(() => {
      setComponentsLoaded(true);
    }, 0);
    return () => {
      window.removeEventListener("load", handleLoading);
    };
  }, []);

  useEffect(() => {
    if (componentsLoaded) {
      setIsReady(false);
    }
  }, [componentsLoaded]);

  return (
    <React.StrictMode>
      {isReady ? (
        <Loading theme={themes.activeTheme} />
      ) : (
        <RouterProvider router={router} />
      )}
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(<App />);
