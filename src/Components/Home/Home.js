import Advert from "./Adverts";
import HomeSearch from "../Forms/BaseSearch";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Advert />
      <div className="divider"></div>
      <HomeSearch />
    </main>
  );
}
