import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const ProtectedRoute = ({ children }) => {
    const { isLogged } = useAuth();
    return isLogged ? children : <Navigate to="/" />;
};

export default ProtectedRoute;
