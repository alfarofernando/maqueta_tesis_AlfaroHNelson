import React, { useState } from "react";
import { verificarUsuario } from "../utils/dummy_data"; // Importamos el utilitario

const SistemaIngreso = ({ setIsIngreso, setIsLogged }) => {
  const [legajo, setLegajo] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1); // 1: Pedir legajo, 2: Pedir contraseña
  const [mensaje, setMensaje] = useState("");

  // Función para agregar números
  const handleButtonClick = (value) => {
    if (step === 1) {
      setLegajo((prev) => prev + value);
    } else {
      setPassword((prev) => prev + value);
    }
  };

  // Función para retroceder en la entrada de números
  const handleBackspace = () => {
    if (step === 1) {
      setLegajo((prev) => prev.slice(0, -1));
    } else {
      setPassword((prev) => prev.slice(0, -1));
    }
  };

  // Validar legajo y pasar a la pantalla de contraseña
  const handleLegajoSubmit = () => {
    if (legajo.trim() !== "") {
      setStep(2);
      setMensaje("Ingrese su contraseña");
    } else {
      setMensaje("Por favor, ingrese un legajo válido.");
    }
  };

  // Validar contraseña y verificar acceso
  const handlePasswordSubmit = () => {
    const usuarioNombre = verificarUsuario(legajo, password);
    if (usuarioNombre) {
      alert(`Ingreso exitoso. Bienvenido, ${usuarioNombre}`);
      setMensaje("");
      setIsLogged(true);
      setIsIngreso(false);
    } else {
      alert("Legajo o contraseña incorrectos.");
      setLegajo("");
      setPassword("");
      setStep(1);
    }
  };

  // Función para borrar todo el input actual
  const handleClear = () => {
    if (step === 1) {
      setLegajo("");
    } else {
      setPassword("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <div className="bg-gray-900 text-white p-8 shadow-2xl rounded-lg max-w-sm w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Sistema T5</h1>
        <h2 className="text-lg text-gray-400 text-center mb-4">{mensaje}</h2>

        {step === 1 ? (
          <div className="mb-6">
            <p className="text-lg text-gray-300 text-center mb-2">
              Ingrese su legajo:
            </p>
            <div className="text-2xl font-mono text-center bg-gray-800 p-4 rounded-lg">
              {legajo || "---"}
            </div>
          </div>
        ) : (
          <div className="mb-6">
            <p className="text-lg text-gray-300 text-center mb-2">
              Ingrese su contraseña:
            </p>
            <div className="text-2xl font-mono text-center bg-gray-800 p-4 rounded-lg">
              {"*".repeat(password.length) || "---"}
            </div>
          </div>
        )}

        {/* Teclado numérico */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button
              key={num}
              onClick={() => handleButtonClick(num.toString())}
              className="bg-gray-700 text-white text-2xl font-bold py-4 rounded-lg transition-transform transform hover:scale-105 active:scale-95"
            >
              {num}
            </button>
          ))}
        </div>

        <div className="flex justify-between">
          {/* Botón para retroceder */}
          <button
            onClick={handleBackspace}
            className="bg-red-600 text-white py-2 px-4 rounded-lg hover:bg-red-700 focus:outline-none transition-colors"
          >
            ⌫ Borrar
          </button>
          {/* Botón para enviar legajo o contraseña */}
          {step === 1 ? (
            <button
              onClick={handleLegajoSubmit}
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none transition-colors"
            >
              Confirmar Legajo
            </button>
          ) : (
            <button
              onClick={handlePasswordSubmit}
              className="bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 focus:outline-none transition-colors"
            >
              Confirmar Contraseña
            </button>
          )}
          {/* Botón para limpiar */}
          <button
            onClick={handleClear}
            className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600 focus:outline-none transition-colors"
          >
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SistemaIngreso;
