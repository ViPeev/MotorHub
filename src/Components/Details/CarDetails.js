import { useContext } from "react";
import { DetailsProvider } from "../../contexts/DetailsContext";
import {
  ContactBox,
  DescriptionBox,
  SlideShow,
  TechDetailsBox,
  LightBox,
} from "./DetailsComponents";
import { DetailsContext } from "../../contexts/DetailsContext";
import styles from "./CarDetails.module.scss";
import EditButton from "./EditButton";
import LikeButton from "./LikeButton";
import { isOwner } from "../../utils/validators";

export default function CarDetails() {
  window.scrollTo(0, 0);

  return (
    <DetailsProvider>
      <DetailsWrapper />
    </DetailsProvider>
  );
}

function DetailsWrapper() {
  const { data } = useContext(DetailsContext);
  const isUserOwner = isOwner(data?._ownerId);

  return data ? (
    <main className={styles.main}>
      {isUserOwner ? <EditButton id={data._id}/> : <LikeButton />}
      <div className={styles["details-container"]}>
        <SlideShow />
        <TechDetailsBox data={data} />
        <DescriptionBox data={data} />
        <ContactBox data={data} />
        <LightBox />
      </div>
    </main>
  ) : null;
}
