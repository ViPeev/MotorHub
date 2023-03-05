import { useContext } from "react";
import { CreateContext } from "../../contexts/CreateContext";
import ImageUpload from "../Misc/ImageUploader/ImageUploader";

export default function ImageUploadWrapper() {
  const { formData, setFormData, setStep } = useContext(CreateContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormData((prev) => {
      return { ...prev, images: prev.images.filter((i) => i) };
    });
  };

  const handleClick = (e) => {
    e.stopPropagation();
    setStep(0);
  };

  return (
    <form onSubmit={handleSubmit}>
      <ImageUpload formData={formData} setFormData={setFormData} />
      <button onClick={handleClick}>Return</button>
      <button>Publish</button>
    </form>
  );
}
