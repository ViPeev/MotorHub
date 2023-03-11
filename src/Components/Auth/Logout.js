import { Navigate } from "react-router-dom";
import { logout } from "../../api/data";

export default function Logout() {
  logout();
  return <Navigate to="/" />;
}
