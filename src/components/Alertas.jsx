import React, { useState } from "react";
import Select from "react-select";
import dummyReports from "../utils/dummy_reports";
import Alerta from "./Alerta";

const Alertas = () => {
  const [selectedFecha, setSelectedFecha] = useState("");
  const [selectedHora, setSelectedHora] = useState("");
  const [selectedSucursal, setSelectedSucursal] = useState(null);
  const [selectedNivel, setSelectedNivel] = useState(null);

  const fechas = [...new Set(dummyReports.map((report) => report.fecha))].map((fecha) => ({ value: fecha, label: fecha }));
  const horas = [...new Set(dummyReports.map((report) => report.hora))].map((hora) => ({ value: hora, label: hora }));
  const sucursales = [...new Set(dummyReports.map((report) => report.sucursal))].map((sucursal) => ({ value: sucursal, label: sucursal }));
  const niveles = [...new Set(dummyReports.map((report) => report.nivel))].map((nivel) => ({ value: nivel, label: `Nivel ${nivel}` }));

  // Filtrar los reportes basados en los valores seleccionados
  const filteredReports = dummyReports.filter((report) => {
    const matchFecha = selectedFecha ? report.fecha.includes(selectedFecha) : true;
    const matchHora = selectedHora ? report.hora.startsWith(selectedHora) : true;
    const matchSucursal = selectedSucursal ? report.sucursal === selectedSucursal.value : true;
    const matchNivel = selectedNivel ? report.nivel === selectedNivel.value : true;

    return matchFecha && matchHora && matchSucursal && matchNivel;
  });

  const handleResetFilters = () => {
    setSelectedFecha("");
    setSelectedHora("");
    setSelectedSucursal(null);
    setSelectedNivel(null);
  };

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md mt-16 min-h-screen">
      <h2 className="text-center text-2xl font-bold mb-4">Reportes de Alta Prioridad</h2>

      <div className="grid grid-cols-4 gap-4 mb-6">
        {/* Campo de texto para fecha */}
        <input
          type="date"
          value={selectedFecha}
          onChange={(e) => setSelectedFecha(e.target.value)}
          placeholder="Filtrar por fecha..."
          className="p-2 border rounded"
        />

        {/* Campo de texto para hora */}
        <input
          type="time"
          value={selectedHora}
          onChange={(e) => setSelectedHora(e.target.value)}
          placeholder="Filtrar por hora..."
          className="p-2 border rounded"
        />

        {/* Select para sucursal */}
        <Select
          options={sucursales}
          value={selectedSucursal}
          onChange={setSelectedSucursal}
          placeholder="Filtrar por sucursal..."
        />

        {/* Select para nivel */}
        <Select
          options={niveles}
          value={selectedNivel}
          onChange={setSelectedNivel}
          placeholder="Filtrar por nivel..."
        />
      </div>

      {/* Botón para reestablecer los filtros */}
      <button
        onClick={handleResetFilters}
        className="bg-blue-500 text-white p-2 rounded-lg mb-4"
      >
        Restablecer filtros
      </button>

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
