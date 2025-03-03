// VistaReporte.jsx
import React, { useState } from "react";
import { useLocation } from "react-router-dom";

const VistaReporte = () => {
    const { state } = useLocation(); // Obtener los datos de la alerta pasada como estado
    const { fecha, hora, sucursal, nivel, descripcion, imagen, direccion, lapsoDiario, lapsoSemanal, lapsoMensual } = state || {}; // Asegurarse de que los datos existan

    const [informe, setInforme] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("El informe ha sido enviado a un supervisor.");
        setInforme("");
    };

    if (!state) {
        return <p>No se encontró la alerta seleccionada.</p>;
    }

    return (
        <div className="p-8 bg-gray-100 rounded-lg shadow-md mt-10 min-h-screen">
            <h2 className="text-center text-3xl font-bold mb-6">Detalles de la Alerta</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Columna 1: Información */}
                <div className="text-lg">
                    <div className="mb-4">
                        <strong className="text-xl">Fecha:</strong> {fecha}
                    </div>
                    <div className="mb-4">
                        <strong className="text-xl">Hora:</strong> {hora}
                    </div>
                    <div className="mb-4">
                        <strong className="text-xl">Sucursal:</strong> {sucursal}
                    </div>
                    <div className="mb-4">
                        <strong className="text-xl">Dirección:</strong> {direccion}
                    </div>
                    <div className="mb-4">
                        <strong className="text-xl">Nivel de Amenaza:</strong> {nivel}
                    </div>
                    <div className="mb-4">
                        <strong className="text-xl">Horas Mensual Totales:</strong> {lapsoMensual}
                    </div>
                    <div className="mb-4">
                        <strong className="text-xl">Horas en la ultima semana:</strong> {lapsoSemanal}
                    </div>
                    <div className="mb-4">
                        <strong className="text-xl">Lapso Tiempo Reporte:</strong> {lapsoDiario}
                    </div>
                    <div className="mb-4">
                        <strong className="text-xl">Descripción:</strong>
                    </div>
                    <div className="mb-4">{descripcion}</div>
                </div>

                {/* Columna 2: Imagen */}
                <div className="flex justify-center items-center">
                    <img
                        src={imagen}
                        alt="Imagen de la alerta"
                        className="w-full h-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Formulario para enviar informe */}
            <div className="mt-8 p-6 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-bold mb-4">Enviar Informe</h3>
                <form onSubmit={handleSubmit}>
                    <textarea
                        className="w-full p-4 border rounded-lg mb-4"
                        rows="5"
                        placeholder="Escribe el informe para el supervisor..."
                        value={informe}
                        onChange={(e) => setInforme(e.target.value)}
                    ></textarea>
                    <button
                        type="submit"
                        className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
                    >
                        Enviar Informe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default VistaReporte;
