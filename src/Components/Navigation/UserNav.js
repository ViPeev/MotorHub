import { useState } from "react";
import { NavLink } from "react-router-dom";
import { getUserData } from "../../utils/localStorage";
import loginImg from "../../assets/icons/arrow-right-to-bracket-solid.svg";
import registerImg from "../../assets/icons/id-card-solid.svg";
import logoutImg from "../../assets/icons/arrow-right-from-bracket-solid.svg";
import profileImg from "../../assets/icons/circle-user-solid.svg";

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
              <span>My Profile</span>
              <img src={profileImg} alt="profile" />
            </NavLink>
          </li>
          <li onClick={handleLogout}>
            <NavLink to="/logout" style={setActiveStyles}>
              <span>Logout</span>
              <img src={logoutImg} alt="logout" />
            </NavLink>
          </li>
        </>
      ) : (
        <>
          <li>
            <NavLink to="/login" style={setActiveStyles}>
              <span>Login</span>
              <img src={loginImg} alt="login" />
            </NavLink>
          </li>
          <li>
            <NavLink to="/register" style={setActiveStyles}>
              <span>Register</span>
              <img src={registerImg} alt="register" />
            </NavLink>
          </li>
        </>
      )}
    </ul>
  );
}
