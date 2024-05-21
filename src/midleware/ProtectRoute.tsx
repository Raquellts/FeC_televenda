import { Route, Routes } from "react-router-dom";
import Cookies from "js-cookie";
import Login from "../Login/index";

const ProtectedRoute = ({
  Component,
  ...rest
}: {
  Component: React.ComponentType;
}) => {
  const isAuthenticated = !!Cookies.get("Token");

  if (!isAuthenticated) {
    return <Login />;
  }

  return (
    <Routes>
      <Route {...rest} element={<Component />} />
    </Routes>
  );
};

export default ProtectedRoute;
