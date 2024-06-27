import React, { useState, useContext } from "react";
import { navigate } from "gatsby";
import "./formstyle.css";
import Register from "../registro/registerbtn";
// import { UserContext } from "../../context/userContext";

function Acceso() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [alertVisible, setAlertVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  // const {setUser} = useContext(UserContext);

  const handleChangeName = (event) => {
    setNombre(event.target.value);
  };

  const handleChangePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleRecoverPasswordClick = () => {
    setAlertVisible(true);
  };

  const handleSubmitEmail = (event) => {
    event.preventDefault();
    setAlertVisible(false);
    alert("Revise su correo electrónico, le hemos enviado un enlace para cambiar su contraseña.");
  };

  const onDismiss = () => setAlertVisible(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError(null);
    try {
      const response = await fetch('http://localhost/api-qr-tandem/v1/login-users.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();
      console.log(data);
      if (response.ok) {
        // setUser(data.token);
        // setUser(data.user);
        // Redirigir al usuario a la página de inicio si el login es exitoso
        navigate('/inicio');
      } else {
        // Mostrar mensaje de error
        setError(data.message || 'Error en el inicio de sesión');
      }
    } catch (error) {
      setError('Error en la conexión con el servidor');
    }
  };

  return (
    <div className="container">
      <div className="custom-box">
        <form className="acceso" onSubmit={handleSubmit}>
          <h1 className="titulo">Acceso para empleados</h1>
          <div className="datos">
            <label className="label-1">
              Usuario:
              <br />
              <input className="campo" type="text" value={nombre} onChange={handleChangeName} placeholder="E-mail" required />
            </label>
            <label className="label-1">
              Contraseña:
              <br />
              <input className="campo" type="password" value={password} onChange={handleChangePassword} placeholder="Contraseña" required />
            </label>
          </div>
          <div className="botones">
            <button className="elemento-button" type="submit">Acceder</button>
            <p className="p-recuperar">¿Has olvidado tu contraseña? <button type="button" className="btn-recuperar" onClick={handleRecoverPasswordClick}>Recuperar clave de acceso</button></p>
          </div>
          <div>
            <p>Si no tienes cuenta puedes registrarte aquí:</p>
            <Register />
          </div>
          {error && <p className="error-message">{error}</p>}
        </form>
      </div>
      {alertVisible && (
        <div className="custom-alert">
          <form onSubmit={handleSubmitEmail} className="custom-form">
            <button type="button" className="close-button" onClick={onDismiss}>x</button>
            <label htmlFor="email" className="form-label">Introduzca su correo electrónico:</label>
            <input type="email" name="email" id="email" className="form-input" placeholder="E-mail" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <button type="submit" className="confirmar">Confirmar</button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Acceso;
