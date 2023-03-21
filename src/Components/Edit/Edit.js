import styles from "./Edit.module.scss";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import EditForm from "./EditForm";
import ErrorBox from "../Misc/Error/ErrorBox";
import { getCarById } from "../../api/data";
import { submitEditCar } from "../../api/services";
import { validateCreate } from "../../utils/validators";
import { Skeleton, Backdrop } from "../Misc/Loaders/Loaders";

export default function Edit() {
  const [formData, setFormData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { id } = useParams();

  const navigate = useNavigate();

  let validator, canSubmit;
  if (formData) {
    const validated = validateCreate(formData);
    validator = validated.validator;
    canSubmit = validated.canSubmit;
  }
  useEffect(() => {
    getCarById(id)
      .then((result) => {
        setFormData(result);
        setLoading(false);
      })
      .catch((error) => {
        navigate("/404", { replace: true });
      });
  }, [id, navigate]);

  const handleChange = (e) => {
    setFormData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!canSubmit) return;

    setLoading(true);
    try {
      await submitEditCar(id, formData);
      setTimeout(() => navigate(`/details/${id}`, { replace: true }), 1000);
    } catch (error) {
      setError(error.message);
      setLoading(false);
      setTimeout(() => setError(null), 1800);
    }
  };

  return formData ? (
    <>
      <main className={`${styles.main} fade-in`}>
        <section>
          <h2>Edit article</h2>
          <EditForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setFormData={setFormData}
            setLoading={setLoading}
            setError={setError}
            formData={formData}
            validator={validator}
            canSubmit={canSubmit}
            id={id}
          />
        </section>
      </main>
      {loading && <Backdrop />}
      {error && <ErrorBox text={error} />}
    </>
  ) : (
    <Skeleton height="full" />
  );
}
