import { useState } from "react";
import styles from "./Create.module.scss";
import { CreateProvider } from "../../contexts/CreateContext";
import StepControl from "./StepControl";

export default function Create() {
  return (
    <CreateProvider>
      <StepControl />
    </CreateProvider>
  );
}
