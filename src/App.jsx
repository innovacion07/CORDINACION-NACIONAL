import React, { useState } from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Card from "./components/Card";

import "./styles.css";
import "./App.css";

const App = () => {
  const [showCargaManualDeDocentes, setShowCargaManualDeDocentes] = useState(false);
  const [showListaDeGrupos, setShowListaDeGrupos] = useState(false);
  const [showCargaManualDeCarrera, setShowCargaManualDeCarrera] = useState(false);
  const [showListaAlumnos, setShowListaAlumnos] = useState(false);
  const [showListaPlanteles, setShowListaPlanteles] = useState(false);
  const [showCargaManualPlanteles, setShowCargaManualPlanteles] = useState(false);
  const [showCargaManualAlumnos, setShowCargaManualAlumnos] = useState(false);
  const [showCargaMasivaAlumnos, setShowCargaMasivaAlumnos] = useState(false);
  const [showCargaMasivaDocentes, setShowCargaMasivaDocentes] = useState(false);
  const [showCargaMasivaCarreras, setShowCargaMasivaCarreras] = useState(false);
  const [showCargaMasivaGrupos, setShowCargaMasivaGrupos] = useState(false);

  const handleOptionClick = (option) => {

    setShowCargaManualDeDocentes(option === "Carga Manual de Docentes");
    setShowListaDeGrupos(option === "Lista de Grupos");
    setShowListaPlanteles(option === "Lista de Planteles");
    setShowCargaManualPlanteles(option ==="Carga Manual  Planteles ");
    setShowCargaManualDeCarrera(option === "Carga Manual de Carreras");
    setShowListaAlumnos(option === "Lista de Alumnos");
    setShowCargaManualAlumnos(option === "Carga Manual de Alumnos");
    setShowCargaMasivaAlumnos(option === "Carga Masiva de Alumnos");
    setShowCargaMasivaDocentes(option === "Carga Masiva de Docentes");
    setShowCargaMasivaCarreras(option === "Carga Masiva de Carreras");
    setShowCargaMasivaGrupos(option === "Carga Masiva de Grupos");

  };

  return (
    <div className="container">
      <div className="sidebars">
        <Sidebar className="sidebar-left" onOptionClick={handleOptionClick} />
        <div className="content">
          <Header />
          <Card

  showListaDeGrupos={showListaDeGrupos}
  showCargaManualDeCarrera={showCargaManualDeCarrera}
  showListaAlumnos={showListaAlumnos} 
  showListaPlanteles={showListaPlanteles} 
  showCargaManualPlanteles={showCargaManualPlanteles} 
  showCargaManualAlumnos={showCargaManualAlumnos}
  showCargaManualDeDocentes={showCargaManualDeDocentes} 
  showCargaMasivaAlumnos={showCargaMasivaAlumnos} 
  showCargaMasivaDocentes={showCargaMasivaDocentes} 
  showCargaMasivaCarreras={showCargaMasivaCarreras} 
  showCargaMasivaGrupos={showCargaMasivaGrupos} 

          />
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default App;
