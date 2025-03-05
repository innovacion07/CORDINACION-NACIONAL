import React from "react";

const Footer = () => {
  return (
    <div
      style={{
        backgroundColor: "#235c4e",
        color: "white",
        padding: "0vh",
        textAlign: "center",
        position: "fixed",
        bottom: 0,
        left: "0px",
        width: "100vw",
        height: "10vh",
        zIndex: 1000,
        boxShadow: "0 -0.5vh 1vw rgba(0, 0, 0, 0.4)",
      }}
    >
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <img
          src="src/PNG/SEP_Logo_2019.svg.png"
          alt="Logo"
          style={{
            height: "6vh",
            marginBottom: "1vh",
          }}
        />

        {/* Contenedor de texto */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            textAlign: "center",
            flex: "1",
            margin: "0 2vw",
          }}
        >
          <p style={{ fontSize: ".9vh", margin: "0.5vh 0" }}>
            <strong>¿Qué es Gob.mx?</strong> <br />
            Es el portal único de trámites, información y participación
            ciudadana. <br />
            <u>
              <a
                href="https://www.gob.mx/que-es-gobmx"
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: "white", textDecoration: "underline" }}
              >
                Leer más
              </a>
            </u>
          </p>
        </div>

        {/* Enlaces */}
        <div
          style={{
            textAlign: "left",
            flex: "1",
            minWidth: "1vw",
            maxWidth: "6vw",
            marginBottom: "1vh",
          }}
        >
          <p style={{ fontSize: "1.0vh", margin: "0.5vh 0" }}>
            <strong>Enlaces</strong> <br />
            <a
              href="https://edomex.gob.mx"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              GOB
            </a>
            <br />
            <a
              href="https://datos.gob.mx/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              Datos
            </a>
            <br />
            <a
              href="https://sep.gob.mx/es/sep1/transparencia_rendicion"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              Transparencia
            </a>
            <br />
            <a
              href="https://consultapublicamx.plataformadetransparencia.org.mx/vut-web/faces/view/consultaPublica.xhtml#inicio"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              PNT
            </a>
            <br />
            <a
              href="https://home.inai.org.mx/"
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: "white", textDecoration: "none" }}
            >
              INAI
            </a>
          </p>
        </div>
      </div>

      {/* Estilos responsivos */}
      <style>
        {`
          @media (max-width: 768px) {
            div {
              flex-direction: column;
              text-align: center;
            }

            img {
              height: 8vh;
            }

            p {
              font-size: 1.2vh;
            }
          }
        `}
      </style>
    </div>
  );
};

export default Footer;