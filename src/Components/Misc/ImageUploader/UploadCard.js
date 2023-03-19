import { useState } from "react";
import styles from "./Upload.module.scss";
import placeholder from "../../../assets/icons/image-solid.svg";
import xmark from "../../../assets/icons/xmark-solid.svg";

const allowed = ["image/jpeg", "image/png", "image/jpg"];

export default function UploadCard({
  index,
  addImage,
  handleRemoveImage,
  image,
}) {
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    if (e.target.files.length > 0 && allowed.includes(e.target.files[0].type)) {
      addImage(e.target.files[0]);
      setError(false);
    }
    if (!allowed.includes(e.target.files[0].type)) {
      setError(true);
    }
  };

  let src;
  if (image) {
    src = typeof image === "string" ? image : URL.createObjectURL(image);
  }

  return (
    <>
      {!image ? (
        <div className={styles["card-empty"]}>
          <label htmlFor={`uploadPhoto-${index}`}>
            {!error && <img src={placeholder} alt="Upload" title="Upload" />}
          </label>
          <input
            type="file"
            name={`uploadPhoto-${index}}`}
            id={`uploadPhoto-${index}`}
            accept=".jpg,.jpeg,.png"
            hidden
            onChange={handleChange}
          />
          {error && <span>File type not supported!</span>}
        </div>
      ) : (
        <div className={styles["card-filled"]}>
          <img src={src} alt="Car" />
          <button onClick={handleRemoveImage}>
            <img src={xmark} alt="Remove" title="Remove" />
          </button>
        </div>
      )}
    </>
  );
}
