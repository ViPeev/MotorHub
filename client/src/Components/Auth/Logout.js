import { Navigate } from "react-router-dom";
import { logout } from "../../api/data";

export default function Logout() {
  (async () => {
    await logout();
  })();

  return <Navigate to="/" />;
}
