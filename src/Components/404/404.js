import { Link } from "react-router-dom";
import image from "./images/404.gif";
import styles from "./404.module.scss";

export default function NotFound() {
  return (
    <main className={styles.main}>
      <div className={styles["message-box"]}>
        <p>The requested page could not be found !</p>
        <Link to="/">How about you start from here ?</Link>
      </div>
      <div className={styles["image-box"]}>
        <img src={image} alt="404" />
      </div>
    </main>
  );
}
