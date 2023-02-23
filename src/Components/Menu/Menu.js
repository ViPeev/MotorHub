import { createPortal } from "react-dom";
import PageNav from "../Navigation/PageNav";
import UserNav from "../Navigation/UserNav";
import "./Menu.scss";

const body = document.querySelector("body");

export default function Menu({ display, clickHandler }) {
  
  const hideMenu = (e) => {
    if (e.target === e.currentTarget) {
      clickHandler();
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
