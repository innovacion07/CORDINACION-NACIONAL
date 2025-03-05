import React, { useState } from 'react';
import * as XLSX from 'xlsx';
import FilterCardc from './FilterCardc.jsx';
import FiltrosSuperiores from './FiltrosSuperiores.jsx';
import FiltrosInferiores from './FiltrosInferiores.jsx';
import Formc from './Formc.jsx';
import './Macstyles.css';

const CargaMasivaDocentes = () => {
  const [datosExcel, setDatosExcel] = useState([]);

  const handleImportarExcel = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const data = e.target.result;
        const workbook = XLSX.read(data, { type: 'binary' });
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1 });
        setDatosExcel(jsonData);
        console.log('Datos del Excel:', jsonData);
      };
      reader.readAsBinaryString(file);
    }
  };

  return (
    <div className="carga-masiva-carreras">
    
        <div className="formContainer">
        <FilterCardc />
          <FiltrosSuperiores />
          <FiltrosInferiores/>
          <Formc onImportarExcel={handleImportarExcel} />
        </div>
      </div>
     
  );
};

export default CargaMasivaDocentes;