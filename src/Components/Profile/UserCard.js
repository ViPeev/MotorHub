import profile from "../../assets/images/profile-photo.jpg";
import { getUserData } from "../../utils/localStorage";
import styles from "./Profile.module.scss";

export default function UserCard() {
  const { userData } = getUserData();

  return (
    <div className={`${styles["card-container"]} fade-in`}>
      <div>
        <img src={profile} alt="profile" />
        <button></button>
      </div>
      <div>
        <p>{userData.fullName}</p>
        <p>{userData.username}</p>
        <p>{userData.email}</p>
      </div>
    </div>
  );
}
