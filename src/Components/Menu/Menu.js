import { createPortal } from "react-dom";
import PageNav from "../Navigation/PageNav";
import UserNav from "../Navigation/UserNav";
import styles from "./Menu.module.scss";

const body = document.querySelector("body");

export default function Menu({ setDisplay }) {
  
  const hideMenu = (e) => {
    if (e.target === e.currentTarget) {
      setDisplay((prev) => !prev);
    }
  };

  return createPortal(
    <div className={styles.backdrop} onClick={hideMenu}>
      <aside className={styles.sidebar}>
        <UserNav />
        <PageNav logo={false} />
      </aside>
    </div>,
    body
  );
}
