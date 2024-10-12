import React from "react";

const PanelPrincipal = ({ children }) => {
  return (
    <>
      <nav className="bg-gradient-to-r from-gray-900 to-gray-800 p-4 shadow-2xl fixed w-full top-0 z-50">
        <div className="container mx-auto flex justify-around items-center">
          <button className="text-white font-bold px-6 py-2 bg-red-500 hover:bg-red-600 transition-all duration-300 ease-in-out rounded-full shadow-lg hover:scale-105 focus:outline-none">
            Alertas
          </button>
          <button className="text-white font-bold px-6 py-2 bg-blue-500 hover:bg-blue-600 transition-all duration-300 ease-in-out rounded-full shadow-lg hover:scale-105 focus:outline-none">
            Detección
          </button>
          <button className="text-white font-bold px-6 py-2 bg-green-500 hover:bg-green-600 transition-all duration-300 ease-in-out rounded-full shadow-lg hover:scale-105 focus:outline-none">
            Análisis
          </button>
          <button className="text-white font-bold px-6 py-2 bg-yellow-500 hover:bg-yellow-600 transition-all duration-300 ease-in-out rounded-full shadow-lg hover:scale-105 focus:outline-none">
            Comparación
          </button>
          <button className="text-white font-bold px-6 py-2 bg-purple-500 hover:bg-purple-600 transition-all duration-300 ease-in-out rounded-full shadow-lg hover:scale-105 focus:outline-none">
            Reportes
          </button>
        </div>
      </nav>
      <div>{children}</div>
    </>
  );
};

export default PanelPrincipal;
