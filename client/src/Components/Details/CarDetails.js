import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Contacts, Description, TechDetails } from "./DetailsComponents";
import GalleryWrapper from "./GalleryWrapper";
import EditButton from "./EditButton";
import LikeButton from "./LikeButton";
import { Skeleton } from "../Misc/Loaders/Loaders";
import ErrorBox from "../Misc/Error/ErrorBox";
import { getCarById } from "../../api/data";
import { isOwner } from "../../utils/validators";
import { getUserData } from "../../utils/localStorage";
import styles from "./CarDetails.module.scss";

export default function CarDetails() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCarById(id)
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        setError(error.message);
        setTimeout(() => navigate("/404", { replace: true }), 1800);
      });
  }, [id]);

  window.scrollTo(0, 0);

  const hasUser = !!getUserData();
  const isUserOwner = isOwner(data?._ownerId);

  return data ? (
    <>
      <main className={`${styles.main} fade-in`}>
        {hasUser &&
          (isUserOwner ? (
            <EditButton id={data._id} />
          ) : (
            <LikeButton id={id} setError={setError} />
          ))}
        <div className={styles["details-container"]}>
          <GalleryWrapper images={data.images} />
          <TechDetails data={data} />
          <Description data={data} />
          <Contacts data={data} />
        </div>
      </main>
      {error && <ErrorBox text={error} />}
    </>
  ) : (
    <Skeleton height="full" />
  );
}
