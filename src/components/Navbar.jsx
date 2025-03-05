import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

const PanelPrincipal = () => {
  const navigate = useNavigate();
  const { isLogged, logout, userName } = useAuth();

  const handleLogout = () => {
    logout();
    navigate("/"); // Redirigir a la página de login después de cerrar sesión
  };

  return (
    <nav className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 shadow-2xl fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Botones de navegación */}
        <div className="flex space-x-4">
          <button
            onClick={() => navigate("/alertas")}
            className="text-white font-bold px-6 py-2 bg-red-500 hover:bg-red-600 transition-all duration-300 ease-in-out rounded-full shadow-lg hover:scale-105 focus:outline-none"
          >
            Alertas
          </button>
        </div>

        {/* Si está logueado, mostrar información del usuario y el botón de logout */}
        {isLogged && (
          <div className="flex items-center space-x-4">
            <span className="text-white font-bold">{userName}</span>
            <button
              onClick={handleLogout}
              className="text-white font-bold px-4 py-2 bg-gray-700 hover:bg-gray-800 transition-all duration-300 ease-in-out rounded-full shadow-lg focus:outline-none"
            >
              Cerrar Sesión
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default PanelPrincipal;
