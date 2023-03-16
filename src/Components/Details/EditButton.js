import { useNavigate } from "react-router-dom";
import styles from "./CarDetails.module.scss";
import pen from "../../assets/icons/pen-solid.svg";

export default function EditButton({ id, ownerId }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/edit/${id}`, { state: { ownerId } });
  };

  return (
    <div className={styles["button-container"]}>
      <button onClick={handleClick}>
        <img src={pen} alt="edit" title="Edit" />
      </button>
    </div>
  );
}
