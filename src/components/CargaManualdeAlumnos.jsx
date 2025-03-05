import { useState } from "react";
import "./CargaManualdeAlumnos.css"; 

const CargaManualdeAlumnos = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    version: "",
    clave: "",
    tipoPerfil: "",
    creditos: "",
    tipoEstudios: "",
    campoDisciplinario: "",
    estatusOperacion: "",
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

    if (!formData.nombre) newErrors.nombre = "El nombre es obligatorio";
    if (!formData.version) newErrors.version = "La versión es obligatoria";
    if (!formData.clave) newErrors.clave = "La clave es obligatoria";
    if (!formData.tipoPerfil) newErrors.tipoPerfil = "El tipo de perfil es obligatorio";
    if (!formData.creditos) newErrors.creditos = "Los créditos son obligatorios";
    if (!formData.tipoEstudios) newErrors.tipoEstudios = "Debes seleccionar un tipo de estudios";
    if (!formData.campoDisciplinario) newErrors.campoDisciplinario = "Debes seleccionar un campo disciplinario";
    if (!formData.estatusOperacion) newErrors.estatusOperacion = "Debes seleccionar un estatus de operación";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Formulario enviado:", formData);
    alert("Formulario enviado con éxito");
  };

  return (
    <div className="form-container">
      <h2>Formulario de Carga Manual de Alumnos</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid three-columns">
          <div className="form-column">
            <label>Nombre</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            {errors.nombre && <p className="error">{errors.nombre}</p>}

            <label>Versión</label>
            <input type="text" name="version" value={formData.version} onChange={handleChange} required />
            {errors.version && <p className="error">{errors.version}</p>}

            <label>Clave</label>
            <input type="text" name="clave" value={formData.clave} onChange={handleChange} required />
            {errors.clave && <p className="error">{errors.clave}</p>}
          </div>

          <div className="form-column">
            <label>Tipo de perfil</label>
            <input type="text" name="tipoPerfil" value={formData.tipoPerfil} onChange={handleChange} required />
            {errors.tipoPerfil && <p className="error">{errors.tipoPerfil}</p>}

            <label>Créditos</label>
            <input type="text" name="creditos" value={formData.creditos} onChange={handleChange} required />
            {errors.creditos && <p className="error">{errors.creditos}</p>}

            <label>Tipo de estudios</label>
            <select name="tipoEstudios" value={formData.tipoEstudios} onChange={handleChange} required>
              <option value="">Seleccione una opción</option>
              {["Experimentales", "Observacionales", "Analíticos", "Epidemiológicos", "Prospectivos", "Retrospectivos", "Ambispectivos"].map((tipo) => (
                <option key={tipo} value={tipo}>{tipo}</option>
              ))}
            </select>
            {errors.tipoEstudios && <p className="error">{errors.tipoEstudios}</p>}
          </div>

          <div className="form-column">
            <label>Campo disciplinario</label>
            <select name="campoDisciplinario" value={formData.campoDisciplinario} onChange={handleChange} required>
              <option value="">Seleccione una opción</option>
              {["Ciencias Experimentales", "Ciencias Sociales", "Humanidades", "Comunicación", "Educación", "Matemáticas", "TIC"].map((campo) => (
                <option key={campo} value={campo}>{campo}</option>
              ))}
            </select>
            {errors.campoDisciplinario && <p className="error">{errors.campoDisciplinario}</p>}

            <label>Estatus de operación</label>
            <select name="estatusOperacion" value={formData.estatusOperacion} onChange={handleChange} required>
              <option value="">Seleccione una opción</option>
              {["Activo", "Inactivo"].map((estatus) => (
                <option key={estatus} value={estatus}>{estatus}</option>
              ))}
            </select>
            {errors.estatusOperacion && <p className="error">{errors.estatusOperacion}</p>}
          </div>
        </div>

        <button type="submit" className="submit-button">Registrarse</button>
      </form>
    </div>
  );
};

export default CargaManualdeAlumnos;
