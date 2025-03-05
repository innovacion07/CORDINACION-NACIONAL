import React, { useState } from 'react';
import './Every.css';
import excelIcon from '../assets/Archivo excel-icono (1).png'; // Importar la imagen

const Form = ({ onImportarExcel }) => {
  const [plantel, setPlantel] = useState('');
  const [estado, setEstado] = useState('');
  const [carrera, setCarrera] = useState('');

  const planteles = ['Selecciona un plantel', 'Plantel A', 'Plantel B', 'Plantel C'];
  const estados = ['Selecciona un estado', 'Aguascalientes', 'Baja California', 'Baja California Sur', 'Ciudad de México'];
  const carreras = ['Selecciona una carrera', 'Ingeniería en Software', 'Medicina', 'Derecho', 'Administración'];

  return (
    <div className="form">
      <h3  className="formTitle" >Plantilla Información Alumnos</h3>
      <div className="iconoContainer">
        <img src={excelIcon} alt="Excel Icon" height={60} /> {/* Usar la imagen importada */}
      </div>

      <div className="inlineInputs">
        <div className="inputGroup">
          <label className="label">Plantel:</label>
          <select value={plantel} onChange={(e) => setPlantel(e.target.value)} className="select">
            {planteles.map((opcion, index) => (
              <option key={index} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
          <h2 className="texto-izquierda">Carga</h2>
        </div>

        <div className="inputGroup">
          <label className="label">Estado:</label>
          <select value={estado} onChange={(e) => setEstado(e.target.value)} className="select">
            {estados.map((opcion, index) => (
              <option key={index} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>

        <div className="inputGroup">
          <label className="label">Carrera:</label>
          <select value={carrera} onChange={(e) => setCarrera(e.target.value)} className="select">
            {carreras.map((opcion, index) => (
              <option key={index} value={opcion}>
                {opcion}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="exportarContainer flex justify-start">
  <label htmlFor="importarExcel" className="exportarButton">
    Seleccionar archivo
  </label>
  <input
    type="file"
    id="importarExcel"
    accept=".xlsx, .xls"
    style={{ display: 'none' }}
    onChange={onImportarExcel}
  />
</div>


      {/* Línea encima del botón "Registrar" */}
      <div className="lineaDivisoria"></div>

      {/* Botón "Registrar" más grande */}
      <div className="registrarCard ">
        <button className="registrarButton flex justify-start">Registrarse</button>
      </div>
    </div>
  );
};

export default Form;