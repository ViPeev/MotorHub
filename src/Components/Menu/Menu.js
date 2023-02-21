import "./Menu.scss";
import { createPortal } from "react-dom";
import PageNav from "../Navigation/PageNav";
import UserNav from "../Navigation/UserNav";

const body = document.querySelector("body");

export default function Menu({ display, displayHandler }) {
  const hideMenu = (e) => {
    if (e.target === e.currentTarget) {
      displayHandler();
    }
  };

  return display
    ? createPortal(
        <div className="backdrop" onClick={hideMenu}>
          <aside className="sidebar fade-in-right">
            <UserNav />
            <div className="nav-controls">
              <PageNav />
            </div>
          </aside>
        </div>,
        body
      )
    : null;
}
