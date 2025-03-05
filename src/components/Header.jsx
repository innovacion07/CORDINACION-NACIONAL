const Header = () => {
  return (
    <>
      <header
        style={{
          background: "#235c4e",
          color: "white",
          padding: "2vh",
          textAlign: "left",
          position: "fixed",
          top: "0",
          left: "0",
          width: "100vw",
          height: "8vh",
          zIndex: "100",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          boxShadow: "0px 0.5vh 0.8vh rgba(0, 0, 0, 0.5)",
        }}
      >
        <img
          src="src/iconos/logo cecyte.png"
          alt="Logo CECyTE"
          style={{
            height: "7vh",
            marginRight: "2vw",
          }}
        />
        <img
          src="src/iconos/SicoeIconoAlumno.png"
          alt="SicoeIconoAlumno"
          style={{
            height: "8vh",
            marginRight: "4vw",
          }}
        />
      </header>

      <header
        style={{
          background: "#235c4e",
          color: "white",
          padding: "1vh",
          textAlign: "left",
          position: "fixed",
          top: "7vh",
          left: "0",
          width: "100vw",
          height: "6vh",
          zIndex: "99",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <span
          style={{
            marginLeft: "auto",
            marginTop: "1vh",
            cursor: "pointer",
            padding: "1vh 2vw",
            borderRadius: "2vh",
            backgroundColor: "#235c4e",
            color: "white",
            fontSize: "1rem",
            textAlign: "center",
            transition: "background-color 0.3s",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#235c4e";
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#235c4e";
          }}
          onClick={() => {
            alert("Cerrar sesión");
          }}
        >
          <img
            src="src/iconos/Cerrar Sesion.png"
            alt="Cerrar Sesion"
            style={{
              height: "3vh",
              marginRight: "1vw",
            }}
          />
        </span>
      </header>
    </>
  );
};

export default Header;