import { useState, createContext } from "react";
import { useLocation } from "react-router-dom";

const CatalogueContext = createContext(null);

function CatalogueProvider({ children }) {
  const location = useLocation();
  const incomingData = location.state?.data;

  return (
    <CatalogueContext.Provider value={{ incomingData }}>
      {children}
    </CatalogueContext.Provider>
  );
}

export { CatalogueContext, CatalogueProvider };
