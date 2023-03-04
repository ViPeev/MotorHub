import { useContext } from "react";
import { CreateContext } from "../../contexts/CreateContext";
import styles from "./Create.module.scss";
import data from "../../staticData/formData";
import CreateFormPartial from "../Forms/CreateFormPartial";

export default function CreateFormWrapper() {
  const { formData, setFormData, setStep } = useContext(CreateContext);

  const handleChange = (e) => {
    setFormData((data) => {
      return { ...data, [e.target.name]: e.target.value };
    });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setStep(1);
  };

  return (
    <form className={styles["data-form"]} onSubmit={handleFormSubmit}>
      <CreateFormPartial
        handleChange={handleChange}
        data={data}
        formData={formData}
      />
      <button>Continue</button>
    </form>
  );
}
