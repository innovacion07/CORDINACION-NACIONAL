import React from "react";

const Resultados = ({ resultados }) => {
  return (
    <div className="resultados-container">
      <h3>Registros Encontrados</h3>
      <ul>
        {resultados.map((item) => (
          <li key={item.id}>{item.grupo}</li>
        ))}
      </ul>
    </div>
  );
};

export default Resultados;