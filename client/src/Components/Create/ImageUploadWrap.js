import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CreateContext } from "../../contexts/CreateContext";
import ImageUpload from "../Misc/ImageUploader/ImageUploader";
import { Backdrop } from "../Misc/Loaders/Loaders";
import { submitCar } from "../../api/services";
import ErrorBox from "../Misc/Error/ErrorBox";

export default function ImageUploadWrapper() {
  window.scrollTo(0, 0);

  const { formData, setFormData, setStep } = useContext(CreateContext);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const id = await submitCar(formData);
      setTimeout(() => navigate(`/details/${id}`), 1000);
    } catch (error) {
      setError(error.message);
      setTimeout(() => setError(null), 1800);
      setLoading(false);
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setStep(0);
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <ImageUpload formData={formData} setFormData={setFormData} />
        <button onClick={handleClick}>Return</button>
        <button>Publish</button>
      </form>
      {loading && <Backdrop />}
      {error && <ErrorBox text={error} />}
    </>
  );
}
