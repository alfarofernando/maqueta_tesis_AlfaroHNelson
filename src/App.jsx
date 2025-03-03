import React from "react";
import { useAuth } from "./context/AuthContext";
import RouterComponent from "./router/RouterComponent";
import Navbar from "./components/Navbar";

function App() {
  const { isLogged } = useAuth();

  return (
    <>
      {isLogged && <Navbar />}
      <RouterComponent />
    </>
  );
}

export default App;
