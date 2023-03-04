import {
  ContactBox,
  DescriptionBox,
  SlideShow,
  TechDetailsBox,
  LightBox,
} from "./DetailsComponents";
import { DetailsProvider } from "../../contexts/DetailsContext";
import styles from "./CarDetails.module.scss";
import OwnerButton from "./OwnerButtons";
import LikeButton from "./LikeButton";

export default function CarDetails() {
  window.scrollTo(0, 0);

  return (
    <DetailsProvider>
      <main className={styles.main}>
      <OwnerButton />
      {/* <LikeButton /> */}
        <div className={styles["details-container"]}>
          <SlideShow />
          <TechDetailsBox />
          <DescriptionBox />
          <ContactBox />
          <LightBox />
        </div>
      </main>
    </DetailsProvider>
  );
}
