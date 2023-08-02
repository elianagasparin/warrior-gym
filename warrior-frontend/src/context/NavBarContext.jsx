import { createContext, useState } from "react";

export const NavBarContext = createContext;

export const AuthProvider = ({children}) => {
    const [menu, setMenu] = useState(true);
    
    const toggleMenu = () => {
        onclick(setMenu(!menu));
        
    };

    return (
        <NavBarContext.Provider value={{menu}}>
            {children}
        </NavBarContext.Provider>
    );
};