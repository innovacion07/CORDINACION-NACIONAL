import React, { useState } from 'react';

import './Everyc.css';

const FiltrosInferiores = ({  }) => {
  const [plantel, setPlantel] = useState('');
  const [estado, setEstado] = useState('');
  const [estatu, setEstatus] = useState('');

  const planteles = ['Plantel', 'Plantel A', 'Plantel B', 'Plantel C'];
  const estados = ['Estado', 'Aguascalientes', 'Baja California', 'Ciudad de México'];
  const estatus = ['Estatus', 'Bueno ', 'Activo', 'Inactivo'];

  return (
    <div className="Filtros Inferiores">
      <h3   className="formTitle">Datos del plantel</h3>
      <div className="lineaDivisoria"></div>
      <div className="inlineInputs">
        <div className="inputGroup">
          <select value={estado} onChange={(e) => setEstado(e.target.value)} className="select">
            {estados.map((opcion, index) => (
              <option key={index} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>

        <div className="inputGroup">
          <select value={estatu} onChange={(e) => setEstatus(e.target.value)} className="select">
            {estatus.map((opcion, index) => (
              <option key={index} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
        <div className="inputGroup">
          <select value={plantel} onChange={(e) => setPlantel(e.target.value)} className="select">
            {planteles.map((opcion, index) => (
              <option key={index} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>

      
      </div>

      
    </div>
  );
};

export default FiltrosInferiores;