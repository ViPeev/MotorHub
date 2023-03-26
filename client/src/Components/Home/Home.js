import Advert from "./Adverts";
import HomeSearch from "./Search";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <>
      <main className={styles.main}>
        <Advert />
        <HomeSearch />
      </main>
      <div className="divider"></div>
    </>
  );
}
