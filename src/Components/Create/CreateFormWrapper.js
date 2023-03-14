import { useContext } from "react";
import { CreateContext } from "../../contexts/CreateContext";
import styles from "./Create.module.scss";
import data from "../../staticData/formData";
import CreateFormPartial from "../Forms/CreateFormPartial";
import { validateCreate } from "../../utils/validators";

export default function CreateFormWrapper() {
  const { formData, setFormData, setStep } = useContext(CreateContext);

  const { validator, canSubmit } = validateCreate(formData);
  
  const handleChange = (e) => {
    setFormData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!canSubmit) return;

    setStep(1);
  };

  return (
    <form className={styles["data-form"]} onSubmit={handleFormSubmit}>
      <CreateFormPartial
        handleChange={handleChange}
        data={data}
        formData={formData}
        validator={validator}
      />
      <button disabled={!canSubmit}>Continue</button>
    </form>
  );
}
