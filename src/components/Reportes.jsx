import React from "react";
import dummyReports from "../utils/dummy_reports"; // Asegúrate de ajustar la ruta

const Reportes = () => {
  // Suponemos que solo hay un reporte en dummyReports
  const report = dummyReports[0];

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-4">Reporte</h2>
      <table className="min-w-full bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2 border">FECHA</th>
            <th className="px-4 py-2 border">HORA</th>
            <th className="px-4 py-2 border">SUCURSAL</th>
            <th className="px-4 py-2 border">MARCADOR N°</th>
            <th className="px-4 py-2 border">SEXO M. F. X</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border">{report.fecha}</td>
            <td className="px-4 py-2 border">{report.hora}</td>
            <td className="px-4 py-2 border">{report.sucursal}</td>
            <td className="px-4 py-2 border bg-red-500 text-white">
              {report.marcador}
            </td>
            <td className="px-4 py-2 border">{report.sexo}</td>
          </tr>
        </tbody>
      </table>
      <div className="mt-4 p-4 border border-gray-300 bg-gray-50 rounded-lg">
        <p className="text-gray-800">{report.descripcion}</p>
      </div>
    </div>
  );
};

export default Reportes;
