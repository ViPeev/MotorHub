import { useState, createContext, useReducer } from "react";
import { controlReducer, defaultSettings } from "../utils/reducer";

const ProfileContext = createContext(null);

function ProfileProvider({ children }) {
  const [navigation, dispatch] = useReducer(controlReducer, defaultSettings);
  const [listType, setListType] = useState("ownOffers");


  return (
    <ProfileContext.Provider
      value={{
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
