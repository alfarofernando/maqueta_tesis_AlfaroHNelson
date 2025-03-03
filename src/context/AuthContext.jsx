import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [isLogged, setIsLogged] = useState(() => {
        // Inicializa el estado con el valor del localStorage
        return localStorage.getItem("isLogged") === "true";
    });
    const [userName, setUserName] = useState(() => {
        // Recupera el nombre de usuario del localStorage
        return localStorage.getItem("userName") || "";
    });

    useEffect(() => {
        // Guarda el estado de autenticación cada vez que cambia
        localStorage.setItem("isLogged", isLogged);
        localStorage.setItem("userName", userName); // Guarda el nombre de usuario
    }, [isLogged, userName]);

    const login = (name) => {
        setIsLogged(true);
        setUserName(name); // Guarda el nombre de usuario en el estado y localStorage
    };

    const logout = () => {
        setIsLogged(false);
        setUserName(""); // Resetea el nombre de usuario
    };

    return (
        <AuthContext.Provider value={{ isLogged, userName, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};
