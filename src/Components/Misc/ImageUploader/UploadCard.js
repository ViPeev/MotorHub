import styles from "./Upload.module.scss";
import placeholder from "../../../assets/icons/image-solid.svg";
import xmark from "../../../assets/icons/xmark-solid.svg";

export default function UploadCard({
  index,
  addImage,
  handleRemoveImage,
  image,
}) {
  const handleChange = (e) => {
    if (e.target.files.length > 0) {
      addImage(e.target.files[0]);
    }
  };

  let src = undefined;
  if(image){
    src = (typeof image === "string") ? image : URL.createObjectURL(image);
  }
  
  return (
    <>
      {!image ? (
        <div className={styles["card-empty"]}>
          <label htmlFor={`uploadPhoto-${index}`}>
            <img src={placeholder} alt="Upload" title="Upload" />
          </label>
        </div>
      ) : (
        <div className={styles["card-filled"]}>
          <img src={src} alt="Car" />
          <button onClick={handleRemoveImage}>
            <img src={xmark} alt="Remove" title="Remove" />
          </button>
        </div>
      )}
      <input
        type="file"
        name={`uploadPhoto-${index}}`}
        id={`uploadPhoto-${index}`}
        accept=".jpg,.jpeg,.png"
        hidden
        onChange={handleChange}
      />
    </>
  );
}
