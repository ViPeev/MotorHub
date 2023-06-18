import { createPortal } from "react-dom";
import styles from "./Loaders.module.scss";

const body = document.querySelector("body");

export function Spinner({ color }) {
  return <div aria-role="loading spinner" className={`${styles.spinner} ${styles[color]}`}></div>;
}

export function Backdrop() {
  return createPortal(
    <div className={`${styles.backdrop} fade-in`}>
      <Spinner color="white" />
    </div>,
    body
  );
}

export function Skeleton({ height }) {
  const heightClass =
    height === "full"
      ? "full-height"
      : height === "suspense"
      ? "suspense-load"
      : "half-height";
      
  const color = height === "full" ? "white" : "gray";

  return (
    <div className={`${styles["loading-box"]} ${styles[heightClass]} fade-in`}>
      <Spinner color={color} />
    </div>
  );
}
