import styles from "./Gallery.module.scss";
import angleLeft from "../../assets/icons/angle-left-solid.svg";
import angleRight from "../../assets/icons/angle-right-solid.svg";
import expand from "../../assets/icons/maximize-solid.svg";

function Gallery({ image, handleClick, index, photoCount }) {
  return (
    <>
      <div className={styles.gallery}>
        <img src={image} alt="car" />;
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
        <button
          className={styles["button-expand"]}
          onClick={handleClick.bind(null, "next")}
        >
          <img src={expand} alt="expand" />
        </button>
      </div>
      <p className={styles.counter}>
        {index + 1} of {photoCount}
      </p>
    </>
  );
}

function PhotoRow({ images, handleClick, activeIndex }) {
  return (
    <div className={styles["photo-row"]}>
      {images.map((current, index) => {
        if (index === activeIndex) {
          return <img className={styles.active} key={index} src={current} />;
        }
        return (
          <img
            key={index}
            src={current}
            onClick={handleClick.bind(null, index)}
          />
        );
      })}
    </div>
  );
}

export { Gallery, PhotoRow };
