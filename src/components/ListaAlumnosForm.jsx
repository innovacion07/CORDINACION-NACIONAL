import { useState } from "react";
import "./ListaAlumnosForm.css";  

const ListaAlumnosForm = () => {
  const [formData, setFormData] = useState({
    curp: "",
    numeroDeControl: "",
    estado: "",
    carrera: "",
    plantel: "",
    estatus: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Restricciones de longitud
    if (name === "curp" && value.length > 18) return;
    if (name === "numeroDeControl" && value.length > 14) return;

    setFormData({ ...formData, [name]: value });

    // Elimina el mensaje de error cuando el usuario corrige el campo
    setErrors({ ...errors, [name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    // Validaciones
    if (!formData.curp) newErrors.curp = "El CURP es obligatorio";
    else if (formData.curp.length !== 18) newErrors.curp = "El CURP debe tener 18 caracteres";

    if (!formData.numeroDeControl) newErrors.numeroDeControl = "El Número de Control es obligatorio";
    else if (formData.numeroDeControl.length !== 14) newErrors.numeroDeControl = "Debe tener 14 caracteres";

    if (!formData.estado) newErrors.estado = "Debes seleccionar un estado";
    if (!formData.carrera) newErrors.carrera = "Debes seleccionar una carrera";
    if (!formData.plantel) newErrors.plantel = "Debes seleccionar un plantel";
    if (!formData.estatus) newErrors.estatus = "Debes seleccionar un estatus";

    // Si hay errores, no envía el formulario
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    console.log("Formulario enviado:", formData);
    alert("Formulario enviado con éxito");
  };

  return (
    <div className="form-container">
      <h2>Lista de Alumnos</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-grid">
          <div className="form-column">
            <label>CURP</label>
            <input 
              type="text" 
              name="curp" 
              value={formData.curp} 
              onChange={handleChange} 
              maxLength="18" 
              required 
            />
            {errors.curp && <p className="error">{errors.curp}</p>}

            <label>Número de Control</label>
            <input 
              type="text" 
              name="numeroDeControl" 
              value={formData.numeroDeControl} 
              onChange={handleChange} 
              maxLength="14" 
              required 
            />
            {errors.numeroDeControl && <p className="error">{errors.numeroDeControl}</p>}

            <label>Plantel</label>
            <select name="plantel" value={formData.plantel} onChange={handleChange} required>
              <option value="">Selecciona un plantel</option>
              {[...Array(10).keys()].map(i => (
                <option key={i} value={`Plantel ${i + 1}`}>Plantel {i + 1}</option>
              ))}
            </select>
            {errors.plantel && <p className="error">{errors.plantel}</p>}
          </div>

          <div className="form-column">
            <label>Estado</label>
            <select name="estado" value={formData.estado} onChange={handleChange} required>
              <option value="">Selecciona un estado</option>
              {[...Array(10).keys()].map(i => (
                <option key={i} value={`Estado ${i + 1}`}>Estado {i + 1}</option>
              ))}
            </select>
            {errors.estado && <p className="error">{errors.estado}</p>}

            <label>Carrera</label>
            <select name="carrera" value={formData.carrera} onChange={handleChange} required>
              <option value="">Selecciona una carrera</option>
              {["Técnico en Programación", "Diseñador Gráfico", "Mecatrónica"].map((carrera) => (
                <option key={carrera} value={carrera}>{carrera}</option>
              ))}
            </select>
            {errors.carrera && <p className="error">{errors.carrera}</p>}

            <label>Estatus</label>
            <select name="estatus" value={formData.estatus} onChange={handleChange} required>
              <option value="">Selecciona un estatus</option>
              <option value="Activo">Regular</option>
              <option value="Inactivo">Iregular</option>
            </select>
            {errors.estatus && <p className="error">{errors.estatus}</p>}
          </div>
        </div>

        <button type="submit" className="submit-button">Buscar</button>
      </form>
    </div>
  );
};

export default ListaAlumnosForm;
