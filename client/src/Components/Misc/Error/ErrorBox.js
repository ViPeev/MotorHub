import { createPortal } from "react-dom";
import styles from "./ErrorBox.module.scss";

export default function ErrorBox({ text }) {
  const content = text.split("\n");

  const errors = content.map((current, index) => (
    <span aria-errormessage={current} key={index} className={`${styles["error-box"]} fade-in`}>
      {current}
    </span>
  ));

  return createPortal(errors, document.body);
}
