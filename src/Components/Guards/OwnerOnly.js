import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getUserData } from "../../utils/localStorage";

const OwnerRoute = ({ children }) => {
  const { userData } = getUserData();
  const { state } = useLocation();

  if (state?.ownerId !== userData._id) {
    return <Navigate to="/" replace />;
  }

  return children ? children : <Outlet />;
};

export default OwnerRoute;
