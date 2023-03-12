import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getUserData } from "../../utils/localStorage";

export default function UserNav() {
  const [isLogged, setIsLogged] = useState(!!getUserData());

  const handleLogout = () => {
    setIsLogged(false);
  };

  return (
    <ul>
      {isLogged ? (
        <>
          <li>
            <NavLink to="/profile">My Profile</NavLink>
          </li>
          <li onClick={handleLogout}>
            <NavLink to="/logout">Logout</NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login">Login</NavLink>
          </li>
          <li>
            <NavLink to="/register">Register</NavLink>
          </li>
        </>
      )}
    </ul>
  );
}
