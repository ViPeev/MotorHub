import {
  ContactBox,
  DescriptionBox,
  SlideShow,
  TechDetailsBox,
  LightBox,
} from "./DetailsComponents";
import { DetailsProvider } from "../../contexts/DetailsContext";
import styles from "./CarDetails.module.scss";

export default function CarDetails() {
  window.scrollTo(0, 0);
  
  return (
    <DetailsProvider>
      <main className={styles["main-container"]}>
        <SlideShow />
        <TechDetailsBox />
        <DescriptionBox />
        <ContactBox />
        <LightBox />
      </main>
    </DetailsProvider>
  );
}
