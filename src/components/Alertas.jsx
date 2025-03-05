// Importaciones
import React, { useState } from "react";
import Select from "react-select";
import dummyReports from "../utils/dummy_reports";
import Alerta from "./Alerta";

const Filtros = ({ onFilterChange, onResetFilters, filters }) => {
  const fechas = [...new Set(dummyReports.map((report) => report.fecha))].map((fecha) => ({ value: fecha, label: fecha }));
  const horas = [...new Set(dummyReports.map((report) => report.hora))].map((hora) => ({ value: hora, label: hora }));
  const sucursales = [...new Set(dummyReports.map((report) => report.sucursal))].map((sucursal) => ({ value: sucursal, label: sucursal }));
  const niveles = [...new Set(dummyReports.map((report) => report.nivel))].map((nivel) => ({ value: nivel, label: `Nivel ${nivel}` }));

  return (
    <div className="grid grid-cols-4 gap-4 mb-6">
      <input
        type="date"
        value={filters.fecha}
        onChange={(e) => onFilterChange("fecha", e.target.value.split('-').reverse().join('/'))}
        placeholder="Filtrar por fecha..."
        className="p-2 border rounded"
      />

      <input
        type="time"
        value={filters.hora}
        onChange={(e) => onFilterChange("hora", e.target.value)}
        placeholder="Filtrar por hora..."
        className="p-2 border rounded"
      />

      <Select
        options={sucursales}
        value={filters.sucursal}
        onChange={(value) => onFilterChange("sucursal", value)}
        placeholder="Filtrar por sucursal..."
      />

      <Select
        options={niveles}
        value={filters.nivel}
        onChange={(value) => onFilterChange("nivel", value)}
        placeholder="Filtrar por nivel..."
      />

      <button
        onClick={onResetFilters}
        className="bg-blue-500 text-white p-2 rounded-lg col-span-4"
      >
        Restablecer filtros
      </button>
    </div>
  );
};

const Alertas = () => {
  const [filters, setFilters] = useState({ fecha: "", hora: "", sucursal: null, nivel: null });

  const handleFilterChange = (key, value) => {
    setFilters((prevFilters) => ({ ...prevFilters, [key]: value }));
  };

  const handleResetFilters = () => {
    setFilters({ fecha: "", hora: "", sucursal: null, nivel: null });
  };

  const filteredReports = dummyReports.filter((report) => {
    const matchFecha = filters.fecha ? report.fecha.includes(filters.fecha) : true;
    const matchHora = filters.hora ? report.hora.startsWith(filters.hora) : true;
    const matchSucursal = filters.sucursal ? report.sucursal === filters.sucursal.value : true;
    const matchNivel = filters.nivel ? report.nivel === filters.nivel.value : true;
    return matchFecha && matchHora && matchSucursal && matchNivel;
  });

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md mt-16 min-h-screen">
      <h2 className="text-center text-2xl font-bold mb-4">Reportes de Alta Prioridad</h2>
      <Filtros onFilterChange={handleFilterChange} onResetFilters={handleResetFilters} filters={filters} />

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
          {filteredReports.map((report, index) => (
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

export default Alertas;
