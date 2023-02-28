import { useState, createContext } from "react";
import audi1 from "../assets/images/audi1.jpg";
import audi2 from "../assets/images/audi2.jpg";
import audi3 from "../assets/images/audi3.jpg";

const DetailsContext = createContext(null);

function DetailsProvider({ children }) {
  const images = [audi1, audi2, audi3, audi1];
  const [index, setIndex] = useState(0);
  const [lightBoxDisplay, setLightBoxDisplay] = useState(false);

  return (
    <DetailsContext.Provider
      value={{
        index,
        images,
        setIndex,
        lightBoxDisplay,
        setLightBoxDisplay,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
}

export { DetailsContext, DetailsProvider };
