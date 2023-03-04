import { useContext } from "react";
import { CreateContext } from "../../contexts/CreateContext";
import CreateForm from "./CreateForm";
import styles from "./Create.module.scss";
import ImageUploadWrapper from "./ImageUploadWrap";

export default function StepControl() {
  const { step } = useContext(CreateContext);
  return (
    <main className={styles.main}>
      <section>
        <h2>{`Step ${step + 1}`}</h2>
        <h3>{!step ? "Technical Details" : "Add Photos"}</h3>
        <p>
          {!step
            ? "Please, fill all fields with accurate data of the vehicle"
            : "Please, attach actual photos of the vehicle. You can upload up to 10 photos"}
        </p>
        {!step ? <CreateForm /> : <ImageUploadWrapper />}
      </section>
    </main>
  );
}
