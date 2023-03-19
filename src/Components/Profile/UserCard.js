import profile from "../../assets/images/profile-photo.jpg";
import styles from "./Profile.module.scss";

export default function UserCard({ owner, userData }) {

  return (
    <div className={`${styles["card-container"]} fade-in`}>
      <div>
        <img src={profile} alt="profile" />
      </div>
      <div>
        <p>{userData.fullName}</p>
        {owner && <p>{userData.username}</p>}
        <p>{userData.email}</p>
      </div>
    </div>
  );
}
