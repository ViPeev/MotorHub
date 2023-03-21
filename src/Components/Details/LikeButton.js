import { useEffect, useState } from "react";
import { isLiked, likeCar } from "../../api/data";
import styles from "./CarDetails.module.scss";
import likeIcon from "../../assets/icons/heart-regular.svg";
import likedIcon from "../../assets/icons/heart-solid.svg";

export default function LikeButton({ id, setError }) {
  const [like, setLike] = useState(false);

  const handleClick = async () => {
    try {
      await likeCar(id);
      setLike((prev) => !prev);
    } catch (error) {
      setError("Oops! Something went wrong!");
      setTimeout(() => setError(null), 1800);
    }
  };

  useEffect(() => {
    isLiked(id)
      .then((result) => {
        setLike(result.result);
      })
      .catch((error) => {
        setError(error.message);
        setTimeout(() => setError(null), 1800);
      });
  }, [id]);

  const icon = like ? likedIcon : likeIcon;

  return (
    <>
      <div className={styles["button-container"]}>
        <button onClick={handleClick}>
          <img src={icon} alt="like" className={"fade-in"} title="Add to favourites" />
        </button>
      </div>
    </>
  );
}
