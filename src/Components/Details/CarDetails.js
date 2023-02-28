import styles from "./CarDetails.module.scss";
import {ContactBox, DescriptionBox, PhotoBox, TechDetailsBox} from "./DetailsComponents";

import audi1 from "../../assets/images/audi1.jpg";
import audi2 from "../../assets/images/audi2.jpg";
import audi3 from "../../assets/images/audi3.jpg";

const images = [audi1, audi2, audi3,audi1];

export default function CarDetails() {
  return (
    <main className={styles["main-container"]}>
      <PhotoBox images={images}/>
      <TechDetailsBox />
      <DescriptionBox />
      <ContactBox />
    </main>
  );
}
