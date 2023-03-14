import styles from "./CarList.module.scss";
import angleLeft from "../../../assets/icons/angle-left-solid.svg";
import angleRight from "../../../assets/icons/angle-right-solid.svg";
import blank from "../../../assets/images/no-car.jpg";
import { useRef } from "react";

export default function CardSlider({ images }) {
  const sliderRef = useRef(null);
  const positionRef = useRef(0);

  if (images.length === 0) {
    images = [blank];
  }

  const handleClick = (direction, e) => {
    e.preventDefault();
    if (direction === "next") {
      positionRef.current =
        positionRef.current + 1 > images.length - 1
          ? 0
          : positionRef.current + 1;
    } else if (direction === "prev") {
      positionRef.current =
        positionRef.current - 1 < 0
          ? images.length - 1
          : positionRef.current - 1;
    }
    sliderRef.current.style.transform = `translateX(-${
      positionRef.current * 100
    }%)`;
  };

  return (
    <div className={styles.gallery}>
      <div ref={sliderRef}>
        {images.map((current, index) => {
          return (
            <span>
              <img key={index} src={current} alt="Car" />
            </span>
          );
        })}
      </div>
      {images.length > 1 && (
        <>
          <button
            className={styles["button-backward"]}
            onClick={handleClick.bind(null, "prev")}
          >
            <img src={angleLeft} alt="Prev" />
          </button>
          <button
            className={styles["button-forward"]}
            onClick={handleClick.bind(null, "next")}
          >
            <img src={angleRight} alt="Next" />
          </button>
        </>
      )}
    </div>
  );
}
