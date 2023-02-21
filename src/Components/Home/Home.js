import Advert from "./Adverts";
import styles from "./Home.module.scss";

export default function Home() {
  return (
    <main className="wrapper">
      <Advert />
      <div className={styles.divider}></div>
      <Advert />
    </main>
  );
}
