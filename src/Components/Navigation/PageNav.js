import { NavLink } from "react-router-dom";
import brandLogo from "../../assets/images/logo.svg";

export default function PageNav({ logo }) {
  const active = {
    textDecoration: "underline 0.5px",
    textUnderlineOffset: "6px",
  };

  const setActiveStyles = ({ isActive }) => (isActive ? active : undefined);

  return (
    <ul>
      <li>
        <NavLink to={"/"} style={!logo ? setActiveStyles : {}}>
          {logo ? <img src={brandLogo} alt="Logo" title="Home" /> : "Home"}
        </NavLink>
      </li>
      <li>
        <NavLink to={"/cars"} style={setActiveStyles}>
          Cars for sale
        </NavLink>
      </li>
      <li>
        <NavLink to={"/sell"} style={setActiveStyles}>
          Sell your car
        </NavLink>
      </li>
      <li>
        <NavLink to={"/news"} style={setActiveStyles}>
          News
        </NavLink>
      </li>
      <li>
        <NavLink to={"/forum"} style={setActiveStyles}>
          Forum
        </NavLink>
      </li>
    </ul>
  );
}
