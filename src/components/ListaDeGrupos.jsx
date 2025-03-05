import { useState } from "react";
import "./ListaDeGrupos.css";  

const ListaDeGrupos = () => {
  const [formData, setFormData] = useState({
    carrera: "",
    estado: "",
    plantel: "",
    semestre: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    if (!formData.estado) newErrors.estado = "Debes seleccionar un estado";
    if (!formData.carrera) newErrors.carrera = "Debes seleccionar una carrera";
    if (!formData.plantel) newErrors.plantel = "Debes seleccionar un plantel";
    if (!formData.semestre) newErrors.semestre = "Debes seleccionar un semestre";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Formulario enviado:", formData);
    alert("Formulario enviado con éxito");
  };

  return (
    <div className="form-container">
      <h2>Lista de Grupos</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-column">
            <label>Estado</label>
            <select name="estado" value={formData.estado} onChange={handleChange} required>
              <option value="">Selecciona un estado</option>
              {["Aguascalientes", "Baja California", "Baja California Sur", "Campeche", "Coahuila de Zaragoza",
                "Colima", "Chiapas", "Chihuahua", "Ciudad de México", "Durango", "Guanajuato", "Guerrero",
                "Hidalgo", "Jalisco", "México", "Michoacán de Ocampo", "Morelos", "Nayarit", "Nuevo León",
                "Oaxaca", "Puebla", "Querétaro", "Quintana Roo", "San Luis Potosí", "Sinaloa", "Sonora",
                "Tabasco", "Tamaulipas", "Tlaxcala", "Veracruz de Ignacio de la Llave", "Yucatán", "Zacatecas"].map((estado) => (
                <option key={estado} value={estado}>{estado}</option>
              ))}
            </select>
            {errors.estado && <p className="error">{errors.estado}</p>}

            <label>Carrera</label>
            <select name="carrera" value={formData.carrera} onChange={handleChange} required>
              <option value="">Selecciona una carrera</option>
              {[                "Técnico en Programación","Diseñador Grafico", "Técnico en Logística", "Técnico en Construcción",
                "Técnico Laboratorista Químico", "Técnico en Estudios de Mercado y de Entornos Sociales",
                "Mecatrónica", "Instrumentación Industrial", "Mantenimiento Automotriz",
                "Desarrollo Organizacional", "Electrónica"
].map((carrera) => (
                <option key={carrera} value={carrera}>{carrera}</option>
              ))}
            </select>
            {errors.carrera && <p className="error">{errors.carrera}</p>}
          </div>

          <div className="form-column">
            <label>Plantel</label>
            <select name="plantel" value={formData.plantel} onChange={handleChange} required>
              <option value="">Selecciona un plantel</option>
              {[                "Acambay", "Aculco", "Almoloya", "Atlautla", "Chalco", "Chicoloapan", "Chimalhuacán",
                "Chimalhuacán II", "Coacalco", "Coatepec Harinas", "Cuautitlán", "Cuautitlán Izcalli",
                "Donato Guerra", "Ecatepec", "Ecatepec II", "Ecatepec III", "Huixquilucan", "Ixtapaluca",
                "Ixtapaluca II", "Ixtapan de la Sal", "Ixtlahuaca", "Jilotepec", "Jiquipilco", "Jocotitlán",
                "La Paz", "Lerma", "Malinalco", "Metepec", "Metepec II", "Nezahualcóyotl", "Nezahualcóyotl II",
                "Nicolás Romero I", "Nicolás Romero II", "Nicolás Romero III", "San Felipe del Progreso",
                "San José del Rincón", "Sultepec", "Tecámac", "Tejupilco", "Temascalapa", "Temascaltepec",
                "Tenancingo", "Tenango del Valle", "Tepotzotlán", "Tequixquiac", "Texcoco", "Tezoyuca",
                "Toluca", "Toluca II", "Tultepec", "Tultitlán", "Valle de Bravo", "Valle de Chalco S. I",
                "Valle de Chalco S. II", "Villa del Carbón", "Villa Victoria", "Villa de Allende", "Xonacatlán",
                "Zacazonapan", "Zinacantepec"].map((plantel) => (
                <option key={plantel} value={plantel}>{plantel}</option>
              ))}
            </select>
            {errors.plantel && <p className="error">{errors.plantel}</p>}

            <label>Semestre</label>
            <select name="semestre" value={formData.semestre} onChange={handleChange} required>
              <option value="">Selecciona un semestre</option>
              {["Semestre 1", "Semestre 2", "Semestre 3"].map((semestre) => (
                <option key={semestre} value={semestre}>{semestre}</option>
              ))}
            </select>
            {errors.semestre && <p className="error">{errors.semestre}</p>}
          </div>
        </div>

        <button type="submit" className="submit-button">Buscar</button>
      </form>
    </div>
  );
};

export default ListaDeGrupos;
