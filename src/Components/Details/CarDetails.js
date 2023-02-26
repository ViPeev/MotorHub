import styles from "./CarDetails.module.scss";
import {ContactBox, DescriptionBox} from "./DetailsComponents";

export default function CarDetails() {
  return (
    <main className={styles["main-container"]}>
      <div></div>
      <div></div>
      <DescriptionBox />
      <ContactBox />
    </main>
  );
}
