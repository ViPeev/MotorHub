import CreateFormPartial from "../Forms/CreateFormPartial";
import ImageUpload from "../Misc/ImageUploader/ImageUploader";
import styles from "./Edit.module.scss";
import data from "../../staticData/formData";
import { useState, useEffect } from "react";
import { deleteCar, getCarById } from "../../api/data";
import { useParams, useNavigate } from "react-router-dom";
import { submitEditCar } from "../../api/services";

export default function Edit() {
  const [formData, setFormData] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCarById(id)
      .then((result) => {
        setFormData(result);
      })
      .catch((error) => {
        navigate("/404", { replace: true });
      });
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await submitEditCar(id, formData);
    navigate(`/details/${id}`);
  };

  const handleDelete = async () => {
    await deleteCar(id);
    navigate(`/`);
  };

  return formData ? (
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
            <button type="button" onClick={handleDelete}>
              Delete
            </button>
            <button>Save</button>
          </div>
        </form>
      </section>
    </main>
  ) : null;
}
