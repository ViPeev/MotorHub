import styles from "./CarDetails.module.scss";
import likeIcon from "../../assets/icons/heart-regular.svg";
import likedIcon from "../../assets/icons/heart-solid.svg";
import { useState } from "react";


export default function LikeButton() {
  const [like,setLike] = useState(false);

  const handleClick = () => {
    setLike(prev => !prev);
  };

  const icon = like ? likedIcon : likeIcon;

  return (
    <div className={styles["button-container"]}>
      <button onClick={handleClick}>
        <img src={icon} alt="like" title="Add to favourites" />
      </button>
    </div>
  );
}