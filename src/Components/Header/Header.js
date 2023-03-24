import { Toggler } from "./Toggler";
import PageNav from "../Navigation/PageNav";
import { memo } from "react";
import styles from "./Header.module.scss";

const Header = memo(function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <PageNav logo={true} />
      </nav>
      <Toggler />
    </header>
  );
});

export { Header };
