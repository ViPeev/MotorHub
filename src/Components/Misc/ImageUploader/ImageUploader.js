import { useState } from "react";
import UploadCard from "./UploadCard";
import styles from "./Upload.module.scss";
import plus from "../../../assets/icons/circle-plus-solid.svg";

export default function ImageUpload({ handleAddImage, handleRemoveImage }) {
  const [count, setCount] = useState([0]);

  const handleClick = (e) => {
    e.preventDefault();
    if (count.length < 10) {
      setCount((prev) => [...prev, prev[prev.length - 1] + 1]);
    }
  };

  return (
    <div className={styles.container}>
      {count.map((current) => (
        <UploadCard
          key={current}
          index={current}
          handleAddImage={handleAddImage.bind(null, current)}
          handleRemoveImage={handleRemoveImage.bind(null,current)}
        />
      ))}
      {count.length < 10 && (
        <button onClick={handleClick}>
          <img src={plus} alt="Add" title="Add" />
        </button>
      )}
    </div>
  );
}
