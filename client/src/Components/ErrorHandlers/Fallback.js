import { Link } from "react-router-dom";
import styles from "./404.module.scss";
import image from "../../assets/images/car-fix.png";

export default function Fallback() {
  return (
    <main className={styles.main}>
      <div className={styles["message-box"]}>
        <p aria-errormessage="Something went wrong">Something went wrong !</p>
      </div>
      <div className={styles["fb-image-box"]}>
        <img src={image} alt="Something went wrong" />
      </div>
    </main>
  );
}