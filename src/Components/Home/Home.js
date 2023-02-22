import Advert from "./Adverts";
import HomeSearch from "../Forms/BaseSearch";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <main>
      <Advert />
      <div className={styles.divider}></div>
      <HomeSearch />
    </main>
  );
}
