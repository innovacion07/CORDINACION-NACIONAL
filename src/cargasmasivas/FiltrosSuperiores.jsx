import React, { useState } from 'react';
import './Everyc.css';

const FiltrosSuperiores = () => {
  const [carrera, setCarrera] = useState('');
  const [codigoCarrera, setCodigoCarrera] = useState('');
  const [modalidad, setModalidad] = useState('');
  const [perfilEgreso, setPerfilEgreso] = useState('');
  const [duracion, setDuracion] = useState('');
  const [estatusCarrera, setEstatusCarrera] = useState('');

  const carreras = ['Carrera', 'Ingeniería en Software', 'Medicina', 'Derecho'];
  const modalidades = ['Modalidad', 'Presencial', 'En línea'];
  const perfilesEgreso = ['Perfil', 'Perfil 1', 'Perfil 2', 'Perfil 3'];
  const duraciones = ['Duración', '4 años', '5 años', '6 años'];
  const estatusCarreras = ['Estatus de Carrera ', 'Activo', 'Inactivo', 'En revisión'];

  return (
    <div className="filtrosSuperiores">
      <h2 className="texto-izquierda">Llena los siguientes filtros</h2>
<h3 className="texto-izquierda">Datos generales</h3>
<div className="lineaDivisoria"></div>

      <div className="fila">
        <div className="filtro">
          <select value={carrera} onChange={(e) => setCarrera(e.target.value)}>
            {carreras.map((opcion, index) => (
              <option key={index} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
        <div className="filtro">
        <label>Codigo de Carrera:</label>

          <input
            type="text"
            
            value={codigoCarrera}
            onChange={(e) => setCodigoCarrera(e.target.value)}          />
        </div>
        <div className="filtro">
          <select value={modalidad} onChange={(e) => setModalidad(e.target.value)}>
            {modalidades.map((opcion, index) => (
              <option key={index} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="fila">
        <div className="filtro">
          <select value={perfilEgreso} onChange={(e) => setPerfilEgreso(e.target.value)}>
            {perfilesEgreso.map((opcion, index) => (
              <option key={index} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
        <div className="filtro">
          <select value={duracion} onChange={(e) => setDuracion(e.target.value)}>
            {duraciones.map((opcion, index) => (
              <option key={index} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
        <div className="filtro">
          <select value={estatusCarrera} onChange={(e) => setEstatusCarrera(e.target.value)}>
            {estatusCarreras.map((opcion, index) => (
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

export default FiltrosSuperiores;