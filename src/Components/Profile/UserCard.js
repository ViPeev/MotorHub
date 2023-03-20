import { useState } from "react";
import blank from "../../assets/images/profile-photo.jpg";
import styles from "./Profile.module.scss";

const allowed = ["image/jpeg", "image/png", "image/jpg"];

export default function UserCard({ owner, userData }) {
  const [image, setImage] = useState(userData.image);

  let src;
  let imgFit;
  if (image) {
    imgFit = "contain";
    src = typeof image === "string" ? image : URL.createObjectURL(image);
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
        {owner && <PhotoUpload setImage={setImage} />}
      </div>
      <div>
        <p>{userData.fullName}</p>
        {owner && <p>{userData.username}</p>}
        <p>{userData.email}</p>
      </div>
    </div>
  );
}

function PhotoUpload({ setImage }) {
  const handleChange = (e) => {
    if (e.target.files.length > 0 && allowed.includes(e.target.files[0].type)) {
      setImage(e.target.files[0]);
    }
  };

  return (
    <div>
      <label htmlFor={`upload-photo`}>Set profile image</label>
      <input
        type="file"
        name={`upload-photo`}
        id={`upload-photo`}
        accept=".jpg,.jpeg,.png"
        onChange={handleChange}
        hidden
      />
    </div>
  );
}
