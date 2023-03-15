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
import { getUserData } from "../../utils/localStorage";
import { Skeleton } from "../Misc/Loaders/Loaders";

export default function CarDetails() {
  window.scrollTo(0, 0);

  return (
    <DetailsProvider>
      <DetailsWrapper />
    </DetailsProvider>
  );
}

function DetailsWrapper() {
  const { data, id, lightBoxDisplay } = useContext(DetailsContext);
  const hasUser = !!getUserData();
  const isUserOwner = isOwner(data?._ownerId);

  const overflow = lightBoxDisplay ? "hidden" : "auto";
  document.body.style.overflow = overflow;

  return data ? (
    <main className={`${styles.main} fade-in`}>
      {hasUser &&
        (isUserOwner ? <EditButton id={data._id} /> : <LikeButton id={id} />)}
      <div className={styles["details-container"]}>
        <SlideShow />
        <TechDetailsBox data={data} />
        <DescriptionBox data={data} />
        <ContactBox data={data} />
        {lightBoxDisplay && <LightBox />}
      </div>
    </main>
  ) : (
    <Skeleton height="full" />
  );
}
