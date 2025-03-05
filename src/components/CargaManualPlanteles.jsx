import React, { useState } from "react";
import "./CargaManualPlanteles.css";

const CargaManualPlanteles = () => {
  // Estados para los campos del formulario
  const [cct, setCCT] = useState("");
  const [nombrePlantel, setNombrePlantel] = useState("");
  const [tipoPlantel, setTipoPlantel] = useState("");
  const [municipio, setMunicipio] = useState("");
  const [estatusOperacion, setEstatusOperacion] = useState("");
  const [estado, setEstado] = useState("");

  // Función para manejar el envío del formulario
  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
    console.log({
      cct,
      nombrePlantel,
      tipoPlantel,
      municipio,
      estatusOperacion,
      estado,
    });
  };

  return (
    <div className="app-container">
      <h2>Formulario de Carga Manual de Planteles</h2>
      <div className="lineaDivisoria"></div>

      <form onSubmit={handleSubmit}>
        {/* Tres campos en línea arriba */}
        <div className="seccion-lineal">
          <div className="campo">
            <label>CCT</label>
            <input
              type="text"
              value={cct}
              onChange={(e) => setCCT(e.target.value)}
              required
            />
          </div>
          <div className="campo">
            <label>Nombre</label>
            <input
              type="text"
              value={nombrePlantel}
              onChange={(e) => setNombrePlantel(e.target.value)}
              required
            />
          </div>
          <div className="campo">
            <label>Tipo de Plantel</label>
            <select
              value={tipoPlantel}
              onChange={(e) => setTipoPlantel(e.target.value)}
              required
            >
              <option value="">Seleccione</option>
              <option value="Público">Público</option>
              <option value="Privado">Privado</option>
            </select>
          </div>
        </div>

        {/* Tres campos en línea abajo */}
        <div className="seccion-lineal">
          <div className="campo">
            <label>Municipio</label>
            <input
              type="text"
              value={municipio}
              onChange={(e) => setMunicipio(e.target.value)}
              required
            />
          </div>
          <div className="campo">
            <label>Estatus de Operación</label>
            <select
              value={estatusOperacion}
              onChange={(e) => setEstatusOperacion(e.target.value)}
              required
            >
              <option value="">Seleccione</option>
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>
          <div className="campo">
            <label>Estado</label>
            <input
              type="text"
              value={estado}
              onChange={(e) => setEstado(e.target.value)}
              required
            />
          </div>
        </div>

        {/* Botón de Registrar */}
        <button type="submit" className="boton-registrar">
          Registrar
        </button>
      </form>
    </div>
  );
};

export default CargaManualPlanteles;