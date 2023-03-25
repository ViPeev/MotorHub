import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getUserData } from "../../utils/localStorage";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = getUserData();

  const { pathname } = useLocation();

  if (!isAuthenticated) {
    return <Navigate to="/login" replace state={pathname} />;
  }

  return children ? children : <Outlet />;
};

export default PrivateRoute;
