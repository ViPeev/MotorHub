import CreateFormPartial from "../Forms/CreateFormPartial";
import ImageUpload from "../Misc/ImageUploader/ImageUploader";
import styles from "./Edit.module.scss";
import { useState } from "react";
import data from "../../staticData/formData";

let mockData = {
  category: "Saloon / Sedan",
  condition: "Used",
  cubicCapacity: "2200",
  color: "Red",
  doors: "4/5",
  description: "mnogo dobra",
  fuelType: "Diesel",
  images: [],
  location: "Bulgaria",
  make: "Renault",
  model: "Twingo",
  modification: "16v",
  mileage: "150000",
  power: "67",
  price: "3000",
  seats: "4",
  transmission: "Manual",
  phone: "+359876511111",
  year: "2005",
}

export default function Edit() {
  const [formData, setFormData] = useState(mockData);

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
        <h2>Edit article</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <CreateFormPartial
              handleChange={handleChange}
              data={data}
              formData={formData}
            />
          </div>
          <div>
            <ImageUpload formData={formData} setFormData={setFormData} />
          </div>
          <div>
          <button>Delete</button>
          <button>Save</button>
          </div>
        </form>
      </section>
    </main>
  );
}
