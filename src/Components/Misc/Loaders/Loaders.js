import { createPortal } from "react-dom";
import styles from "./Loaders.module.scss";

const body = document.querySelector("body");

export function Spinner() {
  return (
    <div className={styles.spinner}>
    </div>
  );
}

export function Backdrop() {
  return createPortal(
    <div className={styles.backdrop}>
      <Spinner />
    </div>,
    body
  );
}

