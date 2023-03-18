import { useState } from "react";
import { createPortal } from "react-dom";
import { Gallery, PhotoRow } from "../Misc/Gallery/Gallery";
import styles from "./CarDetails.module.scss";
import expand from "../../assets/icons/maximize-solid.svg";
import shrink from "../../assets/icons/minimize-solid.svg";

export default function GalleryWrapper({ images }) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState(false);

  const overflow = display ? "hidden" : "auto";
  document.body.style.overflow = overflow;

  const handleClick = (current) => {
    const value =
      current < 0 ? images.length - 1 : current >= images.length ? 0 : current;
    setIndex(value);
  };

  const handleDisplay = (e) => {
    if (e.target === e.currentTarget) {
      setDisplay((prev) => !prev);
    }
  };

  return (
    <>
      <div className={styles.gallery}>
        <Gallery
          image={images[index]}
          handleClick={handleClick}
          handleDisplay={handleDisplay}
          index={index}
          photoCount={images.length}
          styleClass={"gallery"}
          resizeIcon={expand}
        />
        <PhotoRow
          images={images}
          activeIndex={index}
          handleClick={handleClick}
          styleClass={"photo-row"}
        />
      </div>
      {display && (
        <LightBox
          images={images}
          index={index}
          handleClick={handleClick}
          handleDisplay={handleDisplay}
        />
      )}
    </>
  );
}

function LightBox({ images, index, handleClick, handleDisplay }) {
  return createPortal(
    <div className={styles["light-box"]} onClick={handleDisplay}>
      <Gallery
        image={images[index]}
        handleClick={handleClick}
        handleDisplay={handleDisplay}
        index={index}
        photoCount={images.length}
        styleClass={"lightbox-gallery"}
        resizeIcon={shrink}
      />
    </div>,
    document.body
  );
}
