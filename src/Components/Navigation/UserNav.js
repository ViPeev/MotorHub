import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getUserData } from "../../utils/localStorage";

export default function UserNav() {
  const [isLogged, setIsLogged] = useState(!!getUserData());

  const active = {
    textDecoration: "underline 0.5px",
    textUnderlineOffset: "6px",
  };

  const setActiveStyles = ({ isActive }) => (isActive ? active : undefined);

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <ul>
      {isLogged ? (
        <>
          <li>
            <NavLink to="/profile" style={setActiveStyles}>
              My Profile
            </NavLink>
          </li>
          <li onClick={handleLogout}>
            <NavLink to="/logout" style={setActiveStyles}>
              Logout
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login" style={setActiveStyles}>
              Login
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" style={setActiveStyles}>
              Register
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
}
