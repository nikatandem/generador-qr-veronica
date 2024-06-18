import React, { useState } from "react";
import { Link } from "gatsby";
import "./formstyle.css";
import Register from "../registro/registerbtn";

function Acceso() {
  const [nombre, setNombre] = useState("");
  const [password, setPassword] = useState("");
  const [enviado, setEnviado] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [email, setEmail] = useState("");

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

  return (
    <div className="container">
      <div className="custom-box">
      <form className="acceso">
        <h1 className="titulo">Acceso para empleados</h1>
        <div className="datos">
          <label className="label-1" > Usuario:
<br />
      <input className="campo" type="text" value={nombre} onChange={handleChangeName} placeholder="E-mail"/>
        </label>
      <label className="label-1">Contraseña:
<br />
      <input className="campo" type="password" value={password} onChange={handleChangePassword} placeholder="Contraseña"/>
        </label>
          </div>
      <div className="botones">
<Link to="/inicio">
   <button className="elemento-button" type="submit" disabled={enviado}>Acceder</button>
</Link>
      <p className="p-recuperar">¿Has olvidado tu contraseña? <button type="button" className="btn-recuperar" onClick={handleRecoverPasswordClick}> Recuperar clave de acceso</button></p>
      
</div>
<div>
        <p>Si no tienes cuenta puedes registrarte aquí:</p>
        <Register/>
      </div>
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
