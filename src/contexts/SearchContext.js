import { useState, createContext, useReducer } from "react";
import { controlReducer, defaultSettings } from "../utils/reducer";
import data from "../staticData/formData";

const SearchContext = createContext(null);

function SearchProvider({ children }) {
  const [offers, setOffers] = useState(null);
  const [searchData, setSearchData] = useState(data.extendedFormData);
  const [navigation, dispatch] = useReducer(controlReducer, defaultSettings);

  return (
    <SearchContext.Provider
      value={{
        searchData,
        setSearchData,
        offers,
        setOffers,
        navigation,
        dispatch,
      }}
    >
      {children}
    </SearchContext.Provider>
  );
}

export { SearchContext, SearchProvider };
