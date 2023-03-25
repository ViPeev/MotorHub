import { useState, useMemo } from "react";
import UploadCard from "./UploadCard";
import styles from "./Upload.module.scss";
import plus from "../../../assets/icons/circle-plus-solid.svg";

export default function ImageUpload({ formData, setFormData }) {
  const [count, setCount] = useState(formData.images.length);

  const cardMap = useMemo(() => createCardMap(count), [count]);

  const handleClick = (e) => {
    e.preventDefault();

    const index = count < 9 ? count + 1 : count;
    setCount(index);
  };

  const addImage = (index, image) => {
    const images = [...formData.images];
    images[index] = image;

    setFormData((prev) => {
      return { ...prev, images };
    });
  };

  const handleRemoveImage = (index) => {
    const images = [...formData.images];
    images[index] = undefined;

    setFormData((prev) => {
      return { ...prev, images };
    });
  };

  return (
    <div className={styles.container}>
      {cardMap.map((current) => (
        <UploadCard
          key={current}
          index={current}
          addImage={addImage.bind(null, current)}
          handleRemoveImage={handleRemoveImage.bind(null, current)}
          image={formData.images[current]}
        />
      ))}
      {count < 9 && (
        <div className={styles["add-button-container"]}>
          <button onClick={handleClick}>
            <img src={plus} alt="Add" title="Add" className="invert-full" />
          </button>
        </div>
      )}
    </div>
  );
}

function createCardMap(count) {
  const cardMap = [];
  for (let i = 0; i <= count && i < 10; i++) {
    cardMap.push(i);
  }

  return cardMap;
}
