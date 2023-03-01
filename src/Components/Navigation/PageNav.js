import { NavLink } from "react-router-dom";

export default function PageNav() {
  const active = {
    textDecoration: "underline 0.5px",
    textUnderlineOffset: "6px",
  };

  const setActiveStyles = ({ isActive }) => (isActive ? active : undefined);

  return (
    <ul>
      <li>
        <NavLink to={"/"}>
          <img src="" alt="Logo" />
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
