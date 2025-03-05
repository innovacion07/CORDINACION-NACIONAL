import React from "react";
import Card from "./Card";
import BackgroundImage from "./BackgroundImage"; // ✅ Importa el componente BackgroundImage

const Body = ({ showForm }) => { // ✅ Recibe showForm como prop
  const width = window.innerWidth;
  const styles = {
    position: "center",
    width: "100vw",
    height: "100vh",
    backgroundColor: "#808080",
    overflow: "hidden",
  };

  return (
    <div style={styles}>
      <Card showForm={showForm} /> {/* ✅ Pasa showForm a Card */}
      <BackgroundImage />
    </div>
  );
};

export default Body;
