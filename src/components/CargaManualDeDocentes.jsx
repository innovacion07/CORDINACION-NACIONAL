import { useState } from "react";
import "./CargaManualDeDocentes.css";

const CargaManualDeDocentes = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    fechaNacimiento: "",
    genero: "",
    municipioNacimiento: "",
    estadoDireccion: "",
    direccion: "",
    codigoPostal: "",
    municipioDireccion: "",
    tipoSanguineo: "",
    telefono: "",
    email: "",
    estado: "",
    carrera: "",
    plantel: "",
    estatus: "",
    documento: null,
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

    [
      "nombre", "apellidoPaterno", "apellidoMaterno", "fechaNacimiento",
      "genero", "municipioNacimiento", "estadoDireccion", "direccion",
      "codigoPostal", "municipioDireccion", "tipoSanguineo", "telefono",
      "email", "estado", "carrera", "plantel", "estatus"
    ].forEach(field => {
      if (!formData[field]) newErrors[field] = "Este campo es obligatorio";
    });

    if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Formato de email inválido";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Formulario enviado:", formData);
    alert("Formulario enviado con éxito");
  };

  return (
    <div className="form-container">
      <h2>Formulario de Carga Manual de Docentes</h2>
      <h3>Datos Personales</h3>
      <h6>.</h6>

      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-column">
            <label>Nombre</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            {errors.nombre && <p className="error">{errors.nombre}</p>}
            
            <label>Apellido Paterno</label>
            <input type="text" name="apellidoPaterno" value={formData.apellidoPaterno} onChange={handleChange} required />
            {errors.apellidoPaterno && <p className="error">{errors.apellidoPaterno}</p>}
            
            <label>Apellido Materno</label>
            <input type="text" name="apellidoMaterno" value={formData.apellidoMaterno} onChange={handleChange} required />
            {errors.apellidoMaterno && <p className="error">{errors.apellidoMaterno}</p>}
            
            <label>Fecha de Nacimiento</label>
            <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
            {errors.fechaNacimiento && <p className="error">{errors.fechaNacimiento}</p>}
          </div>

          <div className="form-column">
            <label>Género</label>
            <select name="genero" value={formData.genero} onChange={handleChange} required>
              <option value="">Selecciona</option>
              <option value="Masculino">Masculino</option>
              <option value="Femenino">Femenino</option>
              <option value="Otro">Otro</option>
            </select>
            {errors.genero && <p className="error">{errors.genero}</p>}
            
            <label>Teléfono</label>
            <input type="tel" name="telefono" value={formData.telefono} onChange={handleChange} required />
            {errors.telefono && <p className="error">{errors.telefono}</p>}
            
            <label>Correo Electrónico</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
            {errors.email && <p className="error">{errors.email}</p>}
          </div>

          <div className="form-column">
            <label>Dirección</label>
            <input type="text" name="direccion" value={formData.direccion} onChange={handleChange} required />
            {errors.direccion && <p className="error">{errors.direccion}</p>}
            
            <label>Municipio </label>
            <input type="text" name="municipioNacimiento" value={formData.municipioNacimiento} onChange={handleChange} required />
            {errors.municipioNacimiento && <p className="error">{errors.municipioNacimiento}</p>}
            
            <label>Estado de Dirección</label>
            <input type="text" name="estadoDireccion" value={formData.estadoDireccion} onChange={handleChange} required />
            {errors.estadoDireccion && <p className="error">{errors.estadoDireccion}</p>}
            
            <label>Código Postal</label>
            <input type="text" name="codigoPostal" value={formData.codigoPostal} onChange={handleChange} required />
            {errors.codigoPostal && <p className="error">{errors.codigoPostal}</p>}

            <label>Tipo Sanguíneo</label>
<select name="tipoSanguineo" value={formData.tipoSanguineo} onChange={handleChange} required>
  <option value="">Selecciona</option>
  <option value="A+">A+</option>
  <option value="A-">A-</option>
  <option value="B+">B+</option>
  <option value="B-">B-</option>
  <option value="O+">O+</option>
  <option value="O-">O-</option>
  <option value="AB+">AB+</option>
  <option value="AB-">AB-</option>
</select>
{errors.tipoSanguineo && <p className="error">{errors.tipoSanguineo}</p>}

          </div>
        </div>
        <h3>Datos Academicos</h3>

        <label>estudios</label>
            <input type="text" name="Estudios" value={formData.Estudios} onChange={handleChange} required />
            {errors.codigoPostal && <p className="error">{errors.Estudios}</p>}

            <label>Numero de cedula</label>
            <input type="text" name="Numero de cedulal" value={formData.Numero} onChange={handleChange} required />
            {errors.codigoPostal && <p className="error">{errors.codigoPostal}</p>}

            <label>Fecha de Egreso</label>
            <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
            {errors.fechaNacimiento && <p className="error">{errors.fechaNacimiento}</p>}
        

            <h3>Datos institucionales</h3>

<label>Numero de empleado</label>
    <input type="text" name="Estudios" value={formData.Estudios} onChange={handleChange} required />
    {errors.codigoPostal && <p className="error">{errors.Estudios}</p>}

    <label>Rfc</label>
    <input type="text" name="Numero de cedulal" value={formData.Numero} onChange={handleChange} required />
    {errors.codigoPostal && <p className="error">{errors.codigoPostal}</p>}

   

    <label>Correo Institucional</label>
    <input type="text" name="Numero de cedulal" value={formData.Numero} onChange={handleChange} required />
    {errors.codigoPostal && <p className="error">{errors.codigoPostal}</p>}

    <label>Fecha de Ingreso</label>
    <input type="date" name="fechaNacimiento" value={formData.fechaNacimiento} onChange={handleChange} required />
    {errors.fechaNacimiento && <p className="error">{errors.fechaNacimiento}</p>}


        <button type="submit" className="submit-button">Enviar</button>
      </form>
    </div>
  );
};

export default CargaManualDeDocentes;
