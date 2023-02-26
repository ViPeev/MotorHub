import styles from "./Catalogue.module.scss";
import CardGallery from "./CardGallery";

export default function Card({ images }) {
  const href = `/details/${123}`;
  return (
    <a href={href} className={styles["link-wrapper"]}>
      <div className={styles.card}>
        <CardGallery images={images} />
        <h6>VW Golf 1.9 TDI</h6>
        <p>2000 &euro;</p>
        <p>Diesel, 300000 km</p>
        <p>Bulgaria</p>
      </div>
    </a>
  );
}
