import { useState } from "react";
import "./CargaManualDeCarrera.css"; 



const CargaManualDeCarrera = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellidoPaterno: "",
    apellidoMaterno: "",
    curp: "",
    numeroDeControl: "",
    estado: "",
    carrera: "",
    plantel: "",
    estatus: "",
    generacion: "",
    email: "",
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
    if (!formData.apellidoPaterno) newErrors.apellidoPaterno = "El apellido paterno es obligatorio";
    if (!formData.apellidoMaterno) newErrors.apellidoMaterno = "El apellido materno es obligatorio";
   
    if (!formData.estado) newErrors.estado = "Debes seleccionar un estado";
    if (!formData.carrera) newErrors.carrera = "Debes seleccionar una carrera";
    if (!formData.plantel) newErrors.plantel = "Debes seleccionar un plantel";
    if (!formData.estatus) newErrors.estatus = "Debes seleccionar un estatus";
    if (!formData.generacion) newErrors.generacion = "Debes ingresar la generación";
    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Formato de email inválido";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Formulario enviado:", formData);
    alert("Formulario enviado con éxito");
  };

  return (
    <div className="form-container">
      <h2>Formulario de Carga Manual de Carreras</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid three-columns">
          <div className="form-column">
            <label>Nombre</label>
            <input type="text" name="nombre" value={formData.nombre} onChange={handleChange} required />
            {errors.nombre && <p className="error">{errors.nombre}</p>}

            <label>Version</label>
            <input type="text" name="Version" value={formData.version} onChange={handleChange} required />
            {errors.version && <p className="error">{errors.version}</p>}

            <label>Clave</label>
            <input type="text" name="Clave" value={formData.Clave} onChange={handleChange} required />
            {errors.Clave && <p className="error">{errors.Clave}</p>}
          </div>

          <div className="form-column">
            <label>Tipo de perfil</label>
            <input type="text" name="Tipo de perfil" value={formData.tipodecontrol} onChange={handleChange} />
            {errors.curp && <p className="error">{errors.curp}</p>}

            <label>Creditos</label>
            <input type="text" name="Creditos" value={formData.Creditos} onChange={handleChange} />
            {errors.numeroDeControl && <p className="error">{errors.numeroDeControl}</p>}

            <label>Tipo de estudios</label>
            <select name="estado" value={formData.Tipodeestudios} onChange={handleChange} required>
              <option value=""></option>
              {["experimentales", "observacionales", "analíticos", "epidemiológicos", "prospectivos", "retrospectivos" , "ambispectivos"].map((estado) => (
                <option key={estado} value={estado}>{estado}</option>
              ))}
            </select>
            {errors.estado && <p className="error">{errors.estado}</p>}
          </div>

          <div className="form-column">
            <label>Campo diciplinario</label>
            <select name="carrera" value={formData.Campodiciplinario} onChange={handleChange} required>
              <option value=""></option>
              {["Ciencias Experimentales", "Ciencias Sociales", "Humanidades", "Comunicacion","Educacion","Matematicas","(TIC) "].map((carrera) => (
                <option key={carrera} value={carrera}>{carrera}</option>
              ))}
            </select>
            {errors.Campodiciplinario && <p className="error">{errors.Campodiciplinario}</p>}

            <label>Estatus de operacion</label>
            <select name="plantel" value={formData.estatusdeoperacion} onChange={handleChange} required>
              <option value=""></option>
              {["Actico", "Inactivo",].map((plantel) => (
                <option key={plantel} value={plantel}>{plantel}</option>
              ))}
            </select>
            {errors.estatus && <p className="error">{errors.estatus}</p>}
          </div>
        </div>

        <button type="submit" className="submit-button flex justify-start">Guardar Carrera </button>
      </form>
    </div>
  );
};

export default CargaManualDeCarrera;
