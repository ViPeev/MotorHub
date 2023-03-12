import { useState, createContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getCarById } from "../api/data";

const DetailsContext = createContext(null);
function DetailsProvider({ children }) {
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);
  const [lightBoxDisplay, setLightBoxDisplay] = useState(false);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getCarById(id)
      .then((result) => {
        setData(result);
      })
      .catch((error) => {
        navigate("/404", { replace: true });
      });
  }, [id]);

  const handleButtonClick = (length, direction) => {
    let value;
    if (direction === "prev") {
      value = index - 1 >= 0 ? index - 1 : length - 1;
    } else if (direction === "next") {
      value = index + 1 < length ? index + 1 : 0;
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
        data,
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
