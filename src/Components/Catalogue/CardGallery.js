import styles from "./Catalogue.module.scss";
import angleLeft from "../../assets/icons/angle-left-solid.svg";
import angleRight from "../../assets/icons/angle-right-solid.svg";
import { useRef } from "react";

export default function CardGallery({ images }) {
  const galleryRef = useRef(null);
  const positionRef = useRef(0);

  const moveRight = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (positionRef.current < images.length - 1) {
      galleryRef.current.style.transform = `translateX(-${
        ++positionRef.current * 100
      }%)`;
    }
  };

  const moveLeft = (e) => {
    e.stopPropagation();
    e.preventDefault();
    if (positionRef.current > 0) {
      galleryRef.current.style.transform = `translateX(-${
        --positionRef.current * 100
      }%)`;
    }
  };

  return (
    <div className={styles.gallery}>
      <div ref={galleryRef}>
        {images.map((current, index) => {
          return <img key={index} src={current} alt="car" />;
        })}
      </div>
      <button className={styles["button-backward"]} onClick={moveLeft}>
        <img src={angleLeft} alt="Prev" />
      </button>
      <button className={styles["button-forward"]} onClick={moveRight}>
        <img src={angleRight} alt="Next" />
      </button>
    </div>
  );
}
