import React, { useState } from 'react';

import './Everyc.css';
import excelIcon from '../assets/Archivo excel-icono (1).png'; // Importar la imagen

const Formc = ({ onImportarExcel }) => {
  const [plantel, setPlantel] = useState('');
  const [estado, setEstado] = useState('');
  const [carrera, setCarrera] = useState('');

  const planteles = ['Plantel', 'Plantel A', 'Plantel B', 'Plantel C'];
  const estados = ['Estado', 'Aguascalientes', 'Baja California', 'Ciudad de México'];
  const carreras = ['Carrera', 'Ingeniería en Software', 'Medicina', 'Derecho'];

  return (
    <div className="form">
      <h3  className="formTitle">Informacion de Carrera</h3>
      <div className="iconoContainer">
        <img src={excelIcon} alt="Excel Icon" height={60} /> {/* Usar la imagen importada */}
      </div>

      <div className="inlineInputs">
      <div className="inputGroup">
          <select value={carrera} onChange={(e) => setCarrera(e.target.value)} className="select">
            {carreras.map((opcion, index) => (
              <option key={index} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
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
          <select value={plantel} onChange={(e) => setPlantel(e.target.value)} className="select">
            {planteles.map((opcion, index) => (
              <option key={index} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
        </div>

      <div className="exportarContainer flex justify-start">
        <label htmlFor="importarExcel" className="exportarButton">
          <FaFileImport className="exportarIcon" /> Seleccionar archivo 
        </label>
        <input
          type="file"
          id="importarExcel"
          accept=".xlsx, .xls"
          style={{ display: 'none' }}
          onChange={onImportarExcel}
        />
      </div>

      <div className="lineaDivisoria"></div>

      <div className="registrarCard ">
        <button className="registrarButton flex justify-start">Registrar</button>
      </div>
    </div>
  );
};

export default Formc;