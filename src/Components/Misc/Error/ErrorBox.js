import { createPortal } from "react-dom";
import styles from "./ErrorBox.module.scss";

export default function ErrorBox({ text }) {
  return createPortal(
    <span className={`${styles["error-box"]} fade-in`}>{text}</span>,
    document.body
  );
}
