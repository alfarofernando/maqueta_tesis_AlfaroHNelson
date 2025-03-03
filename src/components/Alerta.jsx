// Alerta.jsx
import React from "react";
import { useNavigate } from "react-router-dom";

const Alerta = ({ fecha, hora, sucursal, nivel, descripcion, imagen, direccion, lapsoDiario, lapsoSemanal, lapsoMensual }) => {
    const navigate = useNavigate(); // Hook de navegación

    // Definir colores según el nivel
    const getNivelColor = (nivel) => {
        switch (nivel) {
            case 3:
                return "bg-red-500 text-white";
            case 2:
                return "bg-yellow-500 text-black";
            case 1:
                return "bg-green-500 text-white";
            default:
                return "bg-gray-500 text-white"; // Color por defecto si no coincide
        }
    };

    const handleAnalysisClick = () => {
        // Navegar a la vista de detalles pasando la alerta seleccionada como estado
        navigate("/vista-reporte", {
            state: { fecha, hora, sucursal, nivel, descripcion, imagen, direccion, lapsoDiario, lapsoSemanal, lapsoMensual }, // Asegúrate de pasar todos los campos
        });
    };

    return (
        <tr className="text-center">
            <td className="px-4 py-2 border">{fecha}</td>
            <td className="px-4 py-2 border">{hora}</td>
            <td className="px-4 py-2 border">{sucursal}</td>
            <td className={`px-4 py-2 border ${getNivelColor(nivel)}`}>{nivel}</td>
            <td className="px-4 py-2 border">
                <button
                    onClick={handleAnalysisClick}
                    className="bg-blue-500 text-white px-3 py-1 mr-3 rounded"
                >
                    Análisis
                </button>
                <button className="bg-blue-500 text-white px-3 py-1 rounded">
                    Informar
                </button>
            </td>
        </tr>
    );
};

export default Alerta;
