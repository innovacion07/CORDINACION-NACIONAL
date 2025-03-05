import React from 'react';
import './Every.css';

const Instrucciones = () => {
  return (
    <div className="instrucciones">
      <h3  className="instruccionesTitle">Llena los siguientes filtros </h3>
      <p assign="left" >La MATRICULA es a 14 dígitos.</p>
      <p className="texto-izquierda">La CURP es a 18 dígitos.</p>
      <p className="texto-izquierda">
        El nombre del alumno deberá ser capturado en altas y bajas, considerando acentuaciones. Ejemplo: Eugenio Bautista Juárez.
      </p>
      <p className="texto-izquierda">El semestre actual es numérico. Ejemplo: 1, 2, 3, 4, etc.</p>
    </div>
  );
};

export default Instrucciones;