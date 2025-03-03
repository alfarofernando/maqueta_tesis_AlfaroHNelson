import React from "react";
import { Routes, Route } from "react-router-dom";
import SistemaIngreso from "../components/Acceso";
import Alertas from "../components/Alertas";
import Reportes from "../components/Reportes";
import ProtectedRoute from "../components/ProtectedRoutes"; // Ruta protegida
import VistaReporte from "../components/VistaReporte";

const RouterComponent = () => {

  return (
    <>
      <Routes>
        <Route path="/" element={<SistemaIngreso />} />
        <Route
          path="/alertas"
          element={
            <ProtectedRoute>
              <Alertas />
            </ProtectedRoute>
          }
        />
        <Route
          path="/reportes"
          element={
            <ProtectedRoute>
              <Reportes />
            </ProtectedRoute>
          }
        />
        <Route
          path="/vista-reporte"
          element={
            <ProtectedRoute>
              <VistaReporte />
            </ProtectedRoute>
          }
        />

      </Routes>
    </>
  );
};

export default RouterComponent;
