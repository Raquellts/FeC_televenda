import { Route, Routes, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

type ProtectedRouteProps = {
  element: React.ReactElement; // Update the type to React.ReactElement
  // ...rest of the props
};

const ProtectedRoute = ({ element, ...rest }: ProtectedRouteProps) => {
  const isAuthenticated = !!Cookies.get("Token");

  if (!isAuthenticated) {
    return <Navigate to="/Login" replace />;
  }

  return (
    <Routes>
      <Route path="*" {...rest} element={element} />
    </Routes>
  );
};

export default ProtectedRoute;
