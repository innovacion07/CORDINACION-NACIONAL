import React, { useState, useEffect } from "react";
import ListaAlumnosForm from "../components/ListaAlumnosForm";
import CargaMasivaAlumnos from "../cargasmasivas/CargaMasivaAlumnos";
import CargaMasivaDocentes from "../cargasmasivas/CargaMasivaDocentes";
import CargaMasivaCarreras from "../cargasmasivas/CargaMasivaCarreras";
import CargaManualDeAlumnos from "../components/CargaManualdeAlumnos";
import CargaManualDeCarrera from "../components/CargaManualDeCarrera";
import ListaDeGrupos from "../components/ListaDeGrupos";
import ListaPlanteles from "../components/ListaPlanteles";
import CargaManualDeDocentes from "../components/CargaManualDeDocentes";
import CargaMasivaGrupos from "../cargasmasivas/CargaMasivaGrupos";
import CargaManualPlanteles from "../components/CargaManualPlanteles";

const Card = ({ showCargaManualDeCarrera, showListaAlumnos,showListaPlanteles,showCargaManualPlanteles , showCargaManualAlumnos, showCargaMasivaAlumnos, showCargaMasivaDocentes,showCargaMasivaCarreras, showCargaMasivaGrupos, showListaDeGrupos, showCargaManualDeDocentes }) => {
  const [styles, setStyles] = useState(getStyles(window.innerWidth, window.innerHeight));

  useEffect(() => {
    const handleResize = () => {
      setStyles(getStyles(window.innerWidth, window.innerHeight));
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div style={styles.card}>
     {showCargaManualDeDocentes && <CargaManualDeDocentes />}
      {showListaDeGrupos && <ListaDeGrupos />}
      {showCargaManualDeCarrera && <CargaManualDeCarrera />}
      {showListaAlumnos && <ListaAlumnosForm />}
      {showListaPlanteles && <ListaPlanteles />}
      {showCargaManualPlanteles && <CargaManualPlanteles/>}
      {showCargaManualAlumnos && <CargaManualDeAlumnos />}
      {showCargaMasivaAlumnos && <CargaMasivaAlumnos />}
      {showCargaMasivaDocentes && <CargaMasivaDocentes />}
      {showCargaMasivaCarreras && <CargaMasivaCarreras/>}
      {showCargaMasivaGrupos && <CargaMasivaGrupos/>}
     

      {!showListaAlumnos &&  !showListaPlanteles && !showCargaManualPlanteles && !showCargaManualAlumnos && !showCargaMasivaAlumnos && !showCargaMasivaDocentes && !showCargaManualDeCarrera && !showListaDeGrupos && !showCargaManualDeDocentes && !showCargaMasivaCarreras && !showCargaMasivaGrupos &&  (
        <h2 style={styles.title}>Selecciona una opción del menú</h2>
      )}
    </div>
  );
};

const getStyles = (width, height) => ({
  card: {
    backgroundColor: "#ffffff",  // Fondo blanco para la tarjeta
    width: `clamp(50vw, 70vw, 90vw)`,  // Ajuste dinámico del ancho entre 50vw y 90vw
    maxWidth: "100vw",  // No permite que la tarjeta supere el ancho de la pantalla
    minHeight: `clamp(40vh, 60vh, 80vh)`,  // Altura flexible entre 40vh y 80vh
    height: "auto",  // Se ajusta al contenido
    padding: "2vh",  // Relleno adaptable basado en la altura de la pantalla
    borderRadius: "2vw",  // Bordes redondeados en función del ancho de la pantalla
    boxShadow: "0 8px 20px rgba(0,0,0,0.3)",  // Sombra sutil para efecto flotante
    textAlign: "center",  // Texto centrado dentro de la tarjeta
    marginTop: height * -0.03,  // Margen superior dinámico (10% de la altura)
    marginLeft: width * 0.22,  // Margen izquierdo dinámico (10% del ancho)
  },
  title: {
    fontSize: `clamp(1.5rem, 2.5vw, 3rem)`,  // Tamaño de fuente adaptable entre 1.5rem y 3rem
    fontWeight: "bold",  // Negrita para el título
    marginBottom: "1vh",  // Espaciado inferior proporcional a la altura
  },
});




export default Card;
