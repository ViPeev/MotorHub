import { useNavigate } from "react-router-dom";
import styles from "./CarDetails.module.scss";
import pen from "../../assets/icons/pen-solid.svg";

export default function EditButton({ id }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className={styles["button-container"]}>
      <button onClick={handleClick}>
        <img src={pen} alt="edit" title="Edit" className="invert-full"/>
      </button>
    </div>
  );
}
