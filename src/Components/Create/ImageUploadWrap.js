import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { submitCar } from "../../api/services";
import { CreateContext } from "../../contexts/CreateContext";
import ImageUpload from "../Misc/ImageUploader/ImageUploader";
import { Backdrop } from "../Misc/Loaders/Loaders";

export default function ImageUploadWrapper() {
  const { formData, setFormData, setStep } = useContext(CreateContext);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    try {
      const id = await submitCar(formData);
      setTimeout(() => navigate(`/details/${id}`), 1000);
    } catch (error) {
      setLoading(false);
      console.log(error);
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
    </>
  );
}
