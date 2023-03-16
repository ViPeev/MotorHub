import Toggler from "./Toggler";
import PageNav from "../Navigation/PageNav";
import styles from "./Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <nav>
        <PageNav logo={true} />
      </nav>
      <Toggler />
    </header>
  );
}
