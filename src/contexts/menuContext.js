import { createContext, useState } from "react";

export const MenuContext = createContext();

export function MenuProvider({ children }) {
  const [viewMenu, setViewMenu] = useState(false);

  return (
    <MenuContext.Provider value={{ viewMenu, setViewMenu }}>
      {children}
    </MenuContext.Provider>
  );
}
