import styles from "./Gallery.module.scss";
import angleLeft from "../../../assets/icons/angle-left-solid.svg";
import angleRight from "../../../assets/icons/angle-right-solid.svg";

function Gallery({
  image,
  handleClick,
  handleDisplay,
  index,
  photoCount,
  styleClass,
  resizeIcon,
}) {
  return (
    <>
      <div className={styles[styleClass]}>
        <img src={image} alt="car" />
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
        <button className={styles["button-expand"]} onClick={handleDisplay}>
          <img src={resizeIcon} alt="expand" />
        </button>
      </div>
      <p className={styles.counter}>
        {index + 1} of {photoCount}
      </p>
    </>
  );
}

function PhotoRow({ images, handleClick, activeIndex, styleClass }) {
  return (
    <div className={styles[styleClass]}>
      {images.map((current, index) => {
        if (index === activeIndex) {
          return (
            <img
              alt="Car"
              className={styles.active}
              key={index}
              src={current}
            />
          );
        }
        return (
          <img
            alt="Car"
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
