import React, { useState } from "react";

const Filtros = ({ onBuscar }) => {
  const [estado, setEstado] = useState("");
  const [plantel, setPlantel] = useState("");
  const [semestre, setSemestre] = useState("");
  const [carrera, setCarrera] = useState("");

  // Función para manejar el clic en "Buscar"
  const handleClickBuscar = () => {
    const filtros = { estado, plantel, semestre, carrera };
    onBuscar(filtros);
  };

  return (
    <div className="filtros-container">
      <div className="filtro">
        <label>Estado</label>
        <select value={estado} onChange={(e) => setEstado(e.target.value)}>
          <option value="">Seleccione</option>
          <option value="Activo">Activo</option>
          <option value="Inactivo">Inactivo</option>
        </select>
      </div>

      <div className="filtro">
        <label>Plantel</label>
        <select value={plantel} onChange={(e) => setPlantel(e.target.value)}>
          <option value="">Seleccione</option>
          <option value="Plantel 1">Plantel 1</option>
          <option value="Plantel 2">Plantel 2</option>
        </select>
      </div>

      <div className="filtro">
        <label>Semestre</label>
        <select value={semestre} onChange={(e) => setSemestre(e.target.value)}>
          <option value="">Seleccione</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>

      <div className="filtro">
        <label>Carrera</label>
        <select value={carrera} onChange={(e) => setCarrera(e.target.value)}>
          <option value="">Seleccione</option>
          <option value="Ingeniería">Ingeniería</option>
          <option value="Medicina">Medicina</option>
          <option value="Derecho">Derecho</option>
        </select>
      </div>

      {/* Botón de búsqueda */}
      <div className="boton-container">
        <button className="boton-buscar" onClick={handleClickBuscar}>
          Buscar
        </button>
      </div>
    </div>
  );
};

export default Filtros;