import styles from "./Upload.module.scss";
import placeholder from "../../../assets/icons/image-solid.svg";
import xmark from "../../../assets/icons/xmark-solid.svg";

import { useState } from "react";

export default function UploadCard({
  index,
  handleAddImage,
  handleRemoveImage,
}) {
  const [image, setImage] = useState(null);

  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      setImage(URL.createObjectURL(e.target.files[0]));
      handleAddImage(e.target.files[0]);
    }
  };

  const removeHandler = (e) => {
    handleRemoveImage();
    setImage(null);
  };

  return !image ? (
    <div className={styles["card-empty"]}>
      <input
        type="file"
        name={`uploadPhoto-${index}}`}
        id={`uploadPhoto-${index}`}
        accept=".jpg,.jpeg,.png"
        hidden
        onChange={handleChange}
      />
      <label htmlFor={`uploadPhoto-${index}`}>
        <img src={placeholder} alt="Photo" title="Upload Photo" />
      </label>
    </div>
  ) : (
    <div className={styles["card-filled"]}>
      <img src={image} alt="Photo" />
      <button onClick={removeHandler}>
        <img src={xmark} alt="Remove" title="Remove image" />
      </button>
    </div>
  );
}
