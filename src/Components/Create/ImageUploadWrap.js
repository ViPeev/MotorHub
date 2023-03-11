import { useContext } from "react";
import { CreateContext } from "../../contexts/CreateContext";
import ImageUpload from "../Misc/ImageUploader/ImageUploader";

export default function ImageUploadWrapper() {
  const { formData, setFormData, setStep } = useContext(CreateContext);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setFormData((prev) => {
      return { ...prev, images: prev.images.filter((i) => i) };
    });

    const fData = new FormData();
    formData.images.forEach(current => fData.append('images',current));
    
    const req = await fetch("http://localhost:3030/api/uploads/cars",{
      method:"POST",
      body:fData,
    })
    const res = await req.json();
    console.log(res);
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
