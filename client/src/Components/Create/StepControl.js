import { useContext } from "react";
import { CreateContext } from "../../contexts/CreateContext";
import CreateFormWrapper from "./CreateFormWrapper";
import ImageUploadWrapper from "./ImageUploadWrap";
import styles from "./Create.module.scss";

export default function StepControl() {
  const { step } = useContext(CreateContext);

  return (
    <main className={`${styles.main} fade-in`}>
      <section>
        <h2>{`Step ${step + 1}`}</h2>
        <h3>{!step ? "Technical Details" : "Add Photos"}</h3>
        {step === 1 && (
          <p>It's way more likely to sell your car if people see it.</p>
        )}
        <p style={{ marginBottom: "2rem" }}>
          {!step
            ? "Please, fill all fields with accurate data of the vehicle."
            : "Please, attach actual photos of the vehicle. You can upload up to 10 photos."}
        </p>
        {!step ? <CreateFormWrapper /> : <ImageUploadWrapper />}
      </section>
    </main>
  );
}
