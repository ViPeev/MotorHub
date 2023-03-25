import { useState, createContext } from "react";
import data from "../staticData/formData";

const CreateContext = createContext(null);

function CreateProvider({ children }) {
  const [formData, setFormData] = useState(data.createFormData);
  const [step, setStep] = useState(0);

  return (
    <CreateContext.Provider
      value={{
        step,
        setStep,
        formData,
        setFormData,
      }}
    >
      {children}
    </CreateContext.Provider>
  );
}

export { CreateContext, CreateProvider };
