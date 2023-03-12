import CreateFormPartial from "../Forms/CreateFormPartial";
import ImageUpload from "../Misc/ImageUploader/ImageUploader";
import data from "../../staticData/formData";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getCarById } from "../../api/data";
import { submitEditCar } from "../../api/services";
import { Backdrop } from "../Misc/Loaders/Loaders";
import EditButtons from "./EditButtons";

export default function EditForm() {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCarById(id)
      .then((result) => {
        setFormData(result);
        setLoading(false);
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
    setLoading(true);
    await submitEditCar(id, formData);
    setTimeout(() => navigate(`/details/${id}`), 1000);
  };

  return formData ? (
    <>
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
        <EditButtons id={id} setLoading={setLoading} />
      </form>
      {loading && <Backdrop />}
    </>
  ) : null;
}
