import { useEffect, useState } from "react";
import { isLiked, likeCar } from "../../api/data";
import styles from "./CarDetails.module.scss";
import likeIcon from "../../assets/icons/heart-regular.svg";
import likedIcon from "../../assets/icons/heart-solid.svg";

export default function LikeButton({ id }) {
  const [like, setLike] = useState(false);

  const handleClick = async () => {
    setLike((prev) => !prev);
    await likeCar(id);
  };

  useEffect(() => {
    isLiked(id)
      .then((result) => {
        setLike(result.result);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [id]);

  const icon = like ? likedIcon : likeIcon;

  return (
    <div className={styles["button-container"]}>
      <button onClick={handleClick}>
        <img src={icon} alt="like" title="Add to favourites" />
      </button>
    </div>
  );
}
