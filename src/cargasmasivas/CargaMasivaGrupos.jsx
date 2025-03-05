import React, { useState } from "react";
import Filtros from "./Filtros";
import Resultados from "./Resultados";
import "./MaGstyles.css";

const CargasMasivaGrupos = () => {
  const [resultados, setResultados] = useState([]);

  // Función para manejar la búsqueda
  const handleBuscar = (filtros) => {
    // Simulación de resultados basados en los filtros
    const resultadosSimulados = [
      { id: 1, grupo: "Grupo A" },
      { id: 2, grupo: "Grupo B" },
      { id: 3, grupo: "Grupo C" },
    ];
    setResultados(resultadosSimulados);
  };

  return (
    <div className="app-container">
      <h2>Formulario de Carga Masiva de Grupos</h2>
      <div className="lineaDivisoria"></div>

      <Filtros onBuscar={handleBuscar} />
      <Resultados resultados={resultados} />
    </div>
  );
};

export default  CargasMasivaGrupos;