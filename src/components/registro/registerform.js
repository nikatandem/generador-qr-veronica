import React, { useState } from "react";
import "./register.css"

const RegistroForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    emailVerification: "",
    password: "",
    passwordVerification: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario, como una petición a una API
    console.log("Formulario enviado", formData);
  };

  return (
    <form className="formulario" onSubmit={handleSubmit}>
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
  );
};

export default RegistroForm;
