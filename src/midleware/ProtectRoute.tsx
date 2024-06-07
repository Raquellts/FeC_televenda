import { Route, Routes, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

const ProtectedRoute = ({
  component: Component,
  ...rest
}: {
  component: React.ComponentType;
}) => {
  const isAuthenticated = !!Cookies.get("Token");

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <Routes>
      <Route path="*" {...rest} element={<Component />} />
    </Routes>
  );
};

export default ProtectedRoute;
