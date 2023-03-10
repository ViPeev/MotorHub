import { useNavigate } from "react-router-dom";
import { deleteCar } from "../../api/data";

export default function EditButtons({ id, setLoading }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    setLoading(true);
    await deleteCar(id);
    setTimeout(() => navigate(`/`), 1000);
  };

  return (
    <div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
      <button>Save</button>
    </div>
  );
}
