import { useCallback, useContext, useMemo } from "react";
import { CreateContext } from "../../contexts/CreateContext";
import CreateFormPartial from "../Forms/CreateFormPartial";
import { validateCreate } from "../../utils/validators";
import data from "../../staticData/formData";
import styles from "./Create.module.scss";

export default function CreateFormWrapper() {
  const { formData, setFormData, setStep } = useContext(CreateContext);
  const { validator, canSubmit } = useMemo(
    () => validateCreate(formData),
    [formData]
  );

  const handleChange = useCallback(
    (e) => {
      setFormData((data) => {
        return { ...data, [e.target.name]: e.target.value };
      });
    },
    [setFormData]
  );

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
