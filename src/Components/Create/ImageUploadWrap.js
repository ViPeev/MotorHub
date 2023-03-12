import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { submitCar } from "../../api/services";
import { CreateContext } from "../../contexts/CreateContext";
import ImageUpload from "../Misc/ImageUploader/ImageUploader";

export default function ImageUploadWrapper() {
  const { formData, setFormData, setStep } = useContext(CreateContext);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const id = await submitCar(formData);
      navigate(`/details/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setStep(0);
  };

  return (
    <form onSubmit={handleSubmit} encType="multipart/form-data">
      <ImageUpload formData={formData} setFormData={setFormData} />
      <button onClick={handleClick}>Return</button>
      <button>Publish</button>
    </form>
  );
}
