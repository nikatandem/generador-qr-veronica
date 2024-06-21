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
      const response = await fetch('http://localhost/api-qr-tandem/v1/register-user.php', {
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
          <label htmlFor="nombre">* Nombre:</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="delegacion">Delegación (opcional):</label>
          <input
            type="text"
            id="delegacion"
            name="delegacion"
            value={formData.delegacion}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">* Correo Electrónico:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="emailVerification">* Verificación del Correo Electrónico:</label>
          <input
            type="email"
            id="emailVerification"
            name="emailVerification"
            value={formData.emailVerification}
            onChange={handleChange}
            required
          />
        </div>
        <div className="password-container">
          <label htmlFor="password">* Contraseña:</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="button" className="toggle-password" onClick={togglePasswordVisibility}>
            <img src={showPassword ? eyeOffIcon : eyeIcon} alt="Toggle visibility" />
          </button>
        </div>
        <div className="password-container">
          <label htmlFor="passwordVerification">* Verificación de la Contraseña:</label>
          <input
            type={showPasswordVerification ? "text" : "password"}
            id="passwordVerification"
            name="passwordVerification"
            value={formData.passwordVerification}
            onChange={handleChange}
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
