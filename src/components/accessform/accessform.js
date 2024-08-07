import React, { useState } from "react";
import { navigate, Link } from "gatsby";
import "./formstyle.css";
import Register from "../registro/registerbtn";
import Login from "./login";

function Acceso() {
    const [email, setEmail] = useState('');
    const [alertVisible, setAlertVisible] = useState(false);
    const [error, setError] = useState(null);


    const handleSubmitEmail = (event) => {
        event.preventDefault();
        setAlertVisible(false);
        alert("Revise su correo electrónico, le hemos enviado un enlace para cambiar su contraseña.");
    };

    const onDismiss = () => setAlertVisible(false);

    // Manejo del inicio de sesión exitoso
    const handleLoginSuccess = () => {
        navigate('/inicio'); // Asegúrate de que esta ruta sea correcta
    };

    return (
        <div className="container">
             <h1>Inicio de sesión</h1>
            <div className="acceso">
                <Login onLoginSuccess={handleLoginSuccess} onError={setError} />
                <div className="botones">
                    <p className="p-recuperar">¿Has olvidado tu contraseña? <Link to="/changepassword">Cambiar contraseña</Link></p>
                </div>
                <div>
                    <p>Si no tienes cuenta puedes registrarte aquí:</p>
                    <Register />
                </div>
                {error && <p className="error-message">{error}</p>}
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
