import { useState } from "react";
import SistemaIngreso from "./components/Acceso";
import PanelPrincipal from "./components/PanelPrincipal";
import Reportes from "./components/Reportes";

function App() {
  const [isLogged, setIsLogged] = useState(false);
  const [isIngreso, setIsIngreso] = useState(true);
  const [isAlertas, setIsAlertas] = useState(false);
  const [isDeteccion, setIsDeteccion] = useState(false);
  const [isAnalisis, setIsAnalisis] = useState(false);
  const [isComparacion, setIsComparacion] = useState(false);
  const [isReportes, setIsReportes] = useState(false);

  let content;

  if (isIngreso) {
    content = (
      <SistemaIngreso setIsLogged={setIsLogged} setIsIngreso={setIsIngreso} />
    );
  }

  if (isLogged) {
    console.log("islogged");
    content = <Reportes />;
  }

  return (
    <>
      <PanelPrincipal
        setIsAlertas={setIsAlertas}
        setIsDeteccion={setIsDeteccion}
        setIsAnalisis={setIsAnalisis}
        setIsComparacion={setIsComparacion}
        setIsReportes={setIsReportes}
      >
        {content}
      </PanelPrincipal>
    </>
  );
}

export default App;
