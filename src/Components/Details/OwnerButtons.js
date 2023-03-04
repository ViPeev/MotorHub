import { useNavigate } from "react-router-dom";
import styles from "./CarDetails.module.scss";
import pen from "../../assets/icons/pen-solid.svg";

export default function OwnerButton() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/edit/123");
  };

  return (
    <div className={styles["button-container"]}>
      <button onClick={handleClick}>
        <img src={pen} alt="edit" title="Edit" />
      </button>
    </div>
  );
}
