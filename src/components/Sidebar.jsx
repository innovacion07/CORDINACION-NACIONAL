import React, { useState } from "react";
import SidebarOption from "./SidebarOption";
import alumnosIcon from "../assets/Alumno.png";
import alumnosPressedIcon from "../assets/AlumnoP.png";
import docentesIcon from "../assets/Docente.png";
import docentesPressedIcon from "../assets/DocenteP.png";
import plantelIcon from "../assets/Plantel.png";
import carrerasIcon from "../assets/Carreras.png";
import gruposIcon from "../assets/Grupos.png";
import gruposPressedIcon from "../assets/GruposP.png";
import adminIcon from "../assets/Admin.png";
import "../styles.css";

const Sidebar = ({ onOptionClick }) => {
  const [activeOption, setActiveOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const toggleSubOption = (option) => {
    setActiveOption(option === activeOption ? null : option);
  };

  const handleSuboptionClick = (suboption) => {
    onOptionClick(suboption.name);
    setIsOpen(false); // Cierra el sidebar al seleccionar una subopción
  };

  const options = [
    { name: "Alumnos", icon: alumnosIcon, pressedIcon: alumnosPressedIcon },
    { name: "Docentes", icon: docentesIcon, pressedIcon: docentesPressedIcon },
    { name: "Planteles", icon: plantelIcon, pressedIcon: plantelIcon },
    { name: "Carreras", icon: carrerasIcon, pressedIcon: carrerasIcon },
    { name: "Grupos", icon: gruposIcon, pressedIcon: gruposPressedIcon },
  ];

  const suboptions = {
    Alumnos: [
      { name: "Carga Manual de Alumnos", icon: alumnosIcon },
      { name: "Carga Masiva de Alumnos", icon: alumnosIcon },
      { name: "Lista de Alumnos", icon: alumnosIcon },
    ],
    Docentes: [
      { name: "Carga Manual de Docentes", icon: docentesIcon },
      { name: "Carga Masiva de Docentes", icon: docentesIcon },
      { name: "Lista de Docentes", icon: docentesIcon },
    ],
    Planteles: [
      { name: "Carga Manual  Planteles", icon: plantelIcon },
      { name: "Lista de Planteles", icon: plantelIcon },
    ],
    Carreras: [
      { name: "Carga Manual de Carreras", icon: carrerasIcon },
      { name: "Carga Masiva de Carreras", icon: carrerasIcon },
      { name: "Lista de Carreras", icon: carrerasIcon },
    ],
    Grupos: [
      { name: "Carga Manual de Grupos", icon: gruposIcon },
      { name: "Carga Masiva de Grupos", icon: gruposIcon },
      { name: "Lista de Grupos", icon: gruposIcon },
    ],
  };

  return (
    <>
      <button className="sidebar-toggle" onClick={toggleSidebar}>
        ☰
      </button>

      <div className={`sidebar ${isOpen ? "open" : "closed"}`}>
        <div className="sidebar-title">
          <div className="sidebar-title-background">
            <img src={adminIcon} alt="Admin" className="sidebar-icon" />
            <span>Administrador</span>
          </div>
        </div>

        <div className="sidebar-options">
          {options.map((option, index) => (
            <SidebarOption
              key={index}
              option={option}
              activeOption={activeOption}
              toggleSubOption={toggleSubOption}
              suboptions={suboptions[option.name]}
              handleSuboptionClick={handleSuboptionClick}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
