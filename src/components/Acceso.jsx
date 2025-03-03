import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { verificarUsuario } from "../utils/dummy_data";
import { useAuth } from "../context/AuthContext";

const SistemaIngreso = () => {
  const [legajo, setLegajo] = useState("");
  const [password, setPassword] = useState("");
  const [step, setStep] = useState(1); // Paso actual: 1 para legajo, 2 para contraseña
  const [mensaje, setMensaje] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  // Redirige a /alertas si ya está logueado
  useEffect(() => {
    if (localStorage.getItem("isLogged") === "true") {
      navigate("/alertas");
    }
  }, [navigate]);

  const handleButtonClick = (value) => {
    // Actualiza el legajo o contraseña dependiendo del paso actual
    if (step === 1) {
      setLegajo((prev) => prev + value);
    } else {
      setPassword((prev) => prev + value);
    }
  };

  const handleBackspace = () => {
    // Elimina el último carácter de legajo o contraseña dependiendo del paso actual
    if (step === 1) {
      setLegajo((prev) => prev.slice(0, -1));
    } else {
      setPassword((prev) => prev.slice(0, -1));
    }
  };

  const handleLegajoSubmit = () => {
    if (legajo.trim() !== "") {
      setStep(2); // Si legajo es válido, pasamos al paso de contraseña
    } else {
      setMensaje("Por favor, ingrese un legajo válido.");
    }
  };

  const handlePasswordSubmit = () => {
    const usuarioNombre = verificarUsuario(legajo, password);

    if (usuarioNombre) {
      login(usuarioNombre); // Guarda el nombre de usuario en el contexto
      navigate("/alertas"); // Redirige a /alertas después del login exitoso
      alert(`Ingreso exitoso. Bienvenido, ${usuarioNombre}`);
    } else {
      setMensaje("Legajo o contraseña incorrectos.");
      setLegajo("");
      setPassword("");
      setStep(1); // Resetea el proceso de ingreso
    }
  };

  const handleClear = () => {
    if (step === 1) {
      setLegajo(""); // Limpiar legajo
    } else {
      setPassword(""); // Limpiar contraseña
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-gray-800 via-gray-900 to-black">
      <div className="bg-gray-900 text-white p-8 shadow-2xl rounded-lg max-w-sm w-full">
        <h1 className="text-3xl font-bold text-center mb-6">Sistema T5</h1>
        <h2 className="text-lg text-gray-400 text-center mb-4">{mensaje}</h2>

        {/* Mostrar el mensaje correspondiente según el paso actual */}
        <p className="text-lg text-gray-300 text-center mb-2">
          {step === 1 ? "Ingrese su legajo:" : "Ingrese su contraseña:"}
        </p>

        {/* Mostrar el valor del legajo o contraseña */}
        <div className="text-2xl font-mono text-center bg-gray-800 p-4 rounded-lg mb-6">
          {step === 1 ? legajo || "---" : "*".repeat(password.length) || "---"}
        </div>

        {/* Contenedor de los botones numéricos */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map((num) => (
            <button
              key={num}
              onClick={() => handleButtonClick(num.toString())}
              className="bg-gray-700 text-white text-2xl font-bold py-4 rounded-lg hover:scale-105 active:scale-95"
            >
              {num}
            </button>
          ))}
        </div>

        {/* Controles del sistema: Borrar, Confirmar y Limpiar */}
        <div className="flex justify-between">
          <button onClick={handleBackspace} className="bg-red-600 text-white py-2 px-4 rounded-lg">
            ⌫ Borrar
          </button>
          {step === 1 ? (
            <button onClick={handleLegajoSubmit} className="bg-green-600 text-white py-2 px-4 rounded-lg">
              Confirmar Legajo
            </button>
          ) : (
            <button onClick={handlePasswordSubmit} className="bg-green-600 text-white py-2 px-4 rounded-lg">
              Confirmar Contraseña
            </button>
          )}
          <button onClick={handleClear} className="bg-yellow-500 text-white py-2 px-4 rounded-lg">
            Limpiar
          </button>
        </div>
      </div>
    </div>
  );
};

export default SistemaIngreso;
