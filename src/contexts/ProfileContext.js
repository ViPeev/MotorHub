import { useState, createContext, useReducer } from "react";
import { controlReducer, defaultSettings } from "../utils/reducer";

const ProfileContext = createContext(null);

function ProfileProvider({ children }) {
  const [navigation, dispatch] = useReducer(controlReducer, defaultSettings);
  const [listType, setListType] = useState("ownOffers");
  const [error, setError] = useState(null);

  return (
    <ProfileContext.Provider
      value={{
        navigation,
        dispatch,
        listType,
        setListType,
        error,
        setError,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
}

export { ProfileContext, ProfileProvider };
