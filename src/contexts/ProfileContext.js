import { useState, createContext, useReducer } from "react";
import { controlReducer, defaultSettings } from "../utils/reducer";
import data from "../staticData/formData";

const ProfileContext = createContext(null);

function ProfileProvider({ children }) {
  const [offers, setOffers] = useState(null);
  const [searchData, setSearchData] = useState(data.extendedFormData);
  const [navigation, dispatch] = useReducer(controlReducer, defaultSettings);
  const [listType, setListType] = useState("ownOffers");


  return (
    <ProfileContext.Provider
      value={{
        searchData,
        setSearchData,
        offers,
        setOffers,
        navigation,
        dispatch,
        listType,
        setListType,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export { ProfileContext, ProfileProvider };
