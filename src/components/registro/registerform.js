import React, { useState } from "react";
import "./register.css";

const RegistroForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    emailVerification: "",
    password: "",
    passwordVerification: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
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
      const { name, email, password } = formData;
      const response = await fetch('http://localhost/api-qr-tandem/v1/register-user.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name,
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
          <label htmlFor="name">Nombre:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Correo Electrónico:</label>
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
          <label htmlFor="emailVerification">Verificación del Correo Electrónico:</label>
          <input
            type="email"
            id="emailVerification"
            name="emailVerification"
            value={formData.emailVerification}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Contraseña:</label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label htmlFor="passwordVerification">Verificación de la Contraseña:</label>
          <input
            type="password"
            id="passwordVerification"
            name="passwordVerification"
            value={formData.passwordVerification}
            onChange={handleChange}
            required
          />
        </div>
        <button className="btn" type="submit">Registrarse</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
};

export default RegistroForm;
