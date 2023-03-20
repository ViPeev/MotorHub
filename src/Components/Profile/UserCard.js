import { useState } from "react";
import { submitProfilePhoto } from "../../api/services";
import blank from "../../assets/images/profile-photo.jpg";
import xmark from "../../assets/icons/xmark-solid.svg";
import check from "../../assets/icons/check-solid.svg";
import styles from "./Profile.module.scss";

const allowed = ["image/jpeg", "image/png", "image/jpg"];

export default function UserCard({ owner, userData }) {
  const [image, setImage] = useState({
    photo: userData.image,
    interacted: false,
    default: userData.image,
  });

  let src;
  let imgFit;

  if (image.photo) {
    imgFit = "contain";
    src =
      typeof image.photo === "string"
        ? image.photo
        : URL.createObjectURL(image.photo);
  } else {
    imgFit = "cover";
    src = blank;
  }

  return (
    <div className={`${styles["card-container"]} fade-in`}>
      <div className={styles["photo-container"]}>
        <div>
          <img src={src} alt="profile" className={styles[imgFit]} />
        </div>
        {owner && <PhotoUpload image={image} setImage={setImage} />}
      </div>
      <div>
        <p>{userData.fullName}</p>
        {owner && <p>{userData.username}</p>}
        <p>{userData.email}</p>
      </div>
    </div>
  );
}

function PhotoUpload({ image, setImage }) {
  const handleChange = (e) => {
    if (e.target.files.length > 0 && allowed.includes(e.target.files[0].type)) {
      setImage((prev) => {
        return { ...prev, interacted: true, photo: e.target.files[0] };
      });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setImage((prev) => {
      return { ...prev, default: image.photo, interacted: false };
    });
    await submitProfilePhoto(image.photo);
  };

  const handleCancel = (e) => {
    setImage((prev) => {
      return { ...prev, photo: prev.default, interacted: false };
    });
    e.target.parentElement.reset();
  };

  const visible = image.interacted ? styles["visible"] : "";

  return (
    <form onSubmit={handleSubmit} className={visible}>
      <label htmlFor={`upload-photo`}>Set profile photo</label>
      <input
        type="file"
        name={`upload-photo`}
        id={`upload-photo`}
        accept=".jpg,.jpeg,.png"
        onChange={handleChange}
        onInput={handleChange}
        hidden
      />
      {image.interacted && (
        <>
          <button className="fade-in">
            <img src={check} alt="Confrim" title="Confirm" />
          </button>
          <button className="fade-in" onClick={handleCancel}>
            <img src={xmark} alt="Cancel" title="Cancel" />
          </button>
        </>
      )}
    </form>
  );
}
