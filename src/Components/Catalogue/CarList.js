import Card from "./Card";
import styles from "./Catalogue.module.scss";

import Controls from "../Misc/Controls";
import audi1 from "../../assets/images/audi1.jpg";
import audi2 from "../../assets/images/audi2.jpg";
import audi3 from "../../assets/images/audi3.jpg";

const images = [audi1, audi2, audi3];

export default function CarList() {
  return (
    <section>
      <Controls />
      <div className={styles["card-container"]}>
        <Card images={images} />
        <Card images={images} />
        <Card images={images} />
        <Card images={images} />
        <Card images={images} />
        <Card images={images} />
        <Card images={images} />
        <Card images={images} />
        <Card images={images} />
        <Card images={images} />
        <Card images={images} />
        <Card images={images} />
      </div>
      <Controls />
    </section>
  );
}
