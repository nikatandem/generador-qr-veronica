import React, { useState } from "react";
import "./register.css";
import eyeIcon from "../../images/show.png";
import eyeOffIcon from "../../images/hide.png";

const RegistroForm = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    delegacion: "", // Agregar delegacion
    email: "",
    emailVerification: "",
    password: "",
    passwordVerification: "",
  });

  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordVerification, setShowPasswordVerification] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const togglePasswordVerificationVisibility = () => {
    setShowPasswordVerification(!showPasswordVerification);
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    
    // Validaciones antes de enviar la solicitud
    if (formData.email !== formData.emailVerification) {
      setMessage("Los correos electrónicos no coinciden");
      return;
    }
    if (formData.password !== formData.passwordVerification) {
      setMessage("Las contraseñas no coinciden");
      return;
    }

    try {
      const { nombre, delegacion, email, password } = formData;
      const response = await fetch('http://localhost/api-qr-tandem/v1/get-user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          delegacion,
          email,
          password,
        }),
      });
      const data = await response.json();
      setMessage(data.message);
    } catch (error) {
      console.error('Error registrando usuario', error);
      setMessage('Error registrando usuario');
    }
  };

  return (
    <div>
      <form className="formulario" onSubmit={handleRegister}>
        <div>
          <label htmlFor="nombre" className="labelregistro">* Nombre:</label>
          <input
          className="inputregistro"
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
         
          <label htmlFor="delegacion" className="labelregistro">* Delegación:</label>
           <select
           className="selectregistro"
            id="delegacion"
            name="delegacion"
            value={formData.delegacion}
            onChange={handleChange}
            required
          >
            <option value="">Seleccione una delegación</option>
            <option value="La Almudaina">La Almudaina</option>
            <option value="Aranjuez">Aranjuez</option>
            <option value="El Pardo">El Pardo</option>
            <option value="San Ildefonso">San Ildefonso</option>
            <option value="San Jerónimo de Yuste">San Jerónimo de Yuste</option>
            <option value="San Lorenzo de El Escorial">San Lorenzo de El Escorial</option>
            <option value="Reales Patronatos">Reales Patronatos</option>
          </select>
        </div>
        <div>
          <label htmlFor="email" className="labelregistro">* Correo Electrónico:</label>
          <input
          className="inputregistro"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="emailVerification" className="labelregistro">* Verificación del Correo Electrónico:</label>
          <input
          className="inputregistro"
            type="email"
            id="emailVerification"
            name="emailVerification"
            value={formData.emailVerification}
            onChange={handleChange}
            required
          />
        </div>
        <div className="password-container">
          <label htmlFor="password" className="labelregistro">* Contraseña:</label>
          <input
          className="inputregistro"
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
             autocomplete="new-password"
            required
          />
          <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
            <img src={showPassword ? eyeOffIcon : eyeIcon} alt="Toggle visibility" />
          </button>
        </div>
        <div className="password-container">
          <label htmlFor="passwordVerification" className="labelregistro">* Verificación de la Contraseña:</label>
          <input
          className="inputregistro"
            type={showPasswordVerification ? "text" : "password"}
            id="passwordVerification"
            name="passwordVerification"
            value={formData.passwordVerification}
            onChange={handleChange}
             autocomplete="new-password"
            required
          />
          <button type="button" className="toggle-password" onClick={togglePasswordVerificationVisibility}>
            <img src={showPasswordVerification ? eyeOffIcon : eyeIcon} alt="Toggle visibility" />
          </button>
        </div>
        <button className="btn" type="submit">Registrarse</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegistroForm;
