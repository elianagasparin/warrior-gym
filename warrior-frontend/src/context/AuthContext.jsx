import React from "react";
import { createContext, useEffect, useState } from "react";
import { userDataService } from "../services";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [token, setToken] = useState(localStorage.getItem("token"));
    const [user, setUser] = useState(null);

    
    useEffect(() => {
        localStorage.setItem("token", token);
    }, [token]
    );
    
    useEffect(() => {
        const userData = async () => {
            try {
                const data = await userDataService(token);
                setUser(data);
            } catch (error) {
             error.message   
            }
        };

        if (token) userData()
    }, [token]);

    const login = (token) => {
        setToken(token)
    };

    const logout = () => {
        setToken("");
        setUser(null)
    };

    return (
        <AuthContext.Provider value={{token, user, login, logout}}>
            {children}
        </AuthContext.Provider>  
    );   
};