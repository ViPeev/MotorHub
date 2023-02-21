import { NavLink } from "react-router-dom";

export default function PageNav() {
  const active = {
    textDecoration: "underline 0.5px",
    textUnderlineOffset: "6px",
  };

  return (
    <ul>
      <li>
        <NavLink to={"/"}>
          <img src="" alt="MotorHub Logo" />
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/cars"}
          style={({ isActive }) => (isActive ? active : undefined)}
        >
          Cars for sale
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/sell"}
          style={({ isActive }) => (isActive ? active : undefined)}
        >
          Sell your car
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/news"}
          style={({ isActive }) => (isActive ? active : undefined)}
        >
          News
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/forum"}
          style={({ isActive }) => (isActive ? active : undefined)}
        >
          Forum
        </NavLink>
      </li>
    </ul>
  );
}
