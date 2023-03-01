import { useState, createContext } from "react";
import audi1 from "../assets/images/audi1.jpg";
import audi2 from "../assets/images/audi2.jpg";
import audi3 from "../assets/images/audi3.jpg";

const DetailsContext = createContext(null);

function DetailsProvider({ children }) {
  const images = [audi1, audi2, audi3, audi1];
  const [index, setIndex] = useState(0);
  const [lightBoxDisplay, setLightBoxDisplay] = useState(false);

  const handleButtonClick = (direction) => {
    let value;
    if (direction === "prev") {
      value = index - 1 >= 0 ? index - 1 : images.length - 1;
    } else if (direction === "next") {
      value = index + 1 < images.length ? index + 1 : 0;
    }
    setIndex(value);
  };

  const handleImageClick = (index) => {
    setIndex(index);
  };

  const handleDisplay = (e) => {
    if (e.target === e.currentTarget) {
      setLightBoxDisplay((prev) => !prev);
    }
  };

  return (
    <DetailsContext.Provider
      value={{
        index,
        images,
        lightBoxDisplay,
        handleButtonClick,
        handleImageClick,
        handleDisplay,
      }}
    >
      {children}
    </DetailsContext.Provider>
  );
}

export { DetailsContext, DetailsProvider };
