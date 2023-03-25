import { useNavigate } from "react-router-dom";
import { deleteCar } from "../../api/data";

export default function EditButtons({ id, setLoading, canSubmit, setError }) {
  const navigate = useNavigate();

  const handleDelete = async () => {
    setLoading(true);

    try {
      await deleteCar(id);
      setTimeout(() => navigate(`/`), 1000);
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(null), 1800);
    }
  };

  return (
    <div>
      <button type="button" onClick={handleDelete}>
        Delete
      </button>
      <button disabled={!canSubmit}>Save</button>
    </div>
  );
}
