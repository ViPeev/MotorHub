import CreateFormPartial from "../Forms/CreateFormPartial";
import ImageUpload from "../Misc/ImageUploader/ImageUploader";
import styles from "../Create/Create.module.scss";
import { useState } from "react";
import data from "../../staticData/formData";

export default function Edit() {
  const [formData, setFormData] = useState(data.createFormData);

  const handleChange = (e) => {
    setFormData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const images = formData.images.filter((i) => i);
    setFormData((prev) => {
      return { ...prev, images };
    });
  };

  return (
    <main className={styles.main}>
      <section>
        <form onSubmit={handleSubmit} className={styles["data-form"]}>
          <CreateFormPartial
            handleChange={handleChange}
            data={data}
            formData={formData}
          />
          <ImageUpload formData={formData} setFormData={setFormData} />
        </form>
      </section>
    </main>
  );
}
