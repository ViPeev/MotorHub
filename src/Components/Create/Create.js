import { useState } from "react";
import CreateFormPartial from "../Forms/CreateFormPartial";
import ImageUpload from "../Misc/ImageUploader/ImageUploader";
import data from "../../staticData/formData";
import styles from "./Create.module.scss";

export default function Create() {
  const [formData, setFormData] = useState(data.createFormData);

  const handleChange = (e) => {
    setFormData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = { ...formData };
    const filteredImages = data.images.filter((i) => i);
    console.log({...data,images:filteredImages});
  };

  const handleAddImage = (index, image) => {
    const images = [...formData.images];
    images[index] = image;
    setFormData((prev) => {
      return { ...prev, images };
    });
  };

  const handleRemoveImage = (index) => {
    const images = [...formData.images];
    images.splice(index, 1);
    setFormData((prev) => {
      return { ...prev, images };
    });
  };

  return (
    <main>
      <section className={styles["form-wrapper"]}>
        <form onSubmit={handleSubmit}>
          <CreateFormPartial handleChange={handleChange} formData={formData} />
          <ImageUpload
            handleAddImage={handleAddImage}
            handleRemoveImage={handleRemoveImage}
          />
          <button>Publish</button>
        </form>
      </section>
    </main>
  );
}
