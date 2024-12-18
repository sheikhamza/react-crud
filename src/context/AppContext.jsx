import { createContext, useState } from "react";


export const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [toggle, setToggle]= useState(0);

    const sidebarToggle = () => {
      setToggle(prev => (prev === 0 ? 1 : 0));
    };

    return(
        <AppContext.Provider value={{ toggle,sidebarToggle }}>
            {children}
        </AppContext.Provider>
    )
}