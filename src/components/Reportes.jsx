import React from "react";
import dummyReports from "../utils/dummy_reports";
import Alerta from "./Alerta";

const Reportes = () => {
    return (
        <div className="p-6 bg-gray-100 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">Todos los Reportes</h2>
            <table className="min-w-full bg-white border border-gray-300 rounded-lg">
                <thead>
                    <tr className="bg-gray-200">
                        <th className="px-4 py-2 border">FECHA</th>
                        <th className="px-4 py-2 border">HORA</th>
                        <th className="px-4 py-2 border">SUCURSAL</th>
                        <th className="px-4 py-2 border">NIVEL</th>
                        <th className="px-4 py-2 border">ACCIONES</th>
                    </tr>
                </thead>
                <tbody>
                    {dummyReports.map((report, index) => (
                        <Alerta
                            key={index}
                            fecha={report.fecha}
                            hora={report.hora}
                            sucursal={report.sucursal}
                            nivel={report.nivel}
                            descripcion={report.descripcion}
                            imagen={report.imagen}
                            direccion={report.direccion}
                            lapsoMensual={report.lapsoMensual}
                            lapsoSemanal={report.lapsoSemanal}
                            lapsoDiario={report.lapsoDiario}
                        />
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Reportes;
