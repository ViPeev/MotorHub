import profile from "../../assets/images/profile-photo.jpg";
import styles from "./Profile.module.scss";

export default function UserCard() {
  return (
    <div className={styles["card-container"]}>
      <div>
        <img src={profile} alt="profile" />
        <button></button>
      </div>
      <div>
        <p>Vladislav Peev</p>
        <p>vladislavpeev9412@gmail.com</p>
      </div>
    </div>
  );
}
