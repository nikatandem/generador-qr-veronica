import React, { useState } from 'react';
import eyeIcon from "../../images/show.png";
import eyeOffIcon from "../../images/hide.png";

const ChangePassword = () => {
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        passwordVerification: ''
    });
    const [showPassword, setShowPassword] = useState(false);
    const [showPasswordVerification, setShowPasswordVerification] = useState(false);
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    const togglePasswordVerificationVisibility = () => {
        setShowPasswordVerification(!showPasswordVerification);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (formData.password !== formData.passwordVerification) {
            setMessage('Las contraseñas no coinciden');
            return;
        }
        
        const url = 'http://localhost/api-qr-tandem/v1/change-password.php'; // Reemplaza 'URL_DEL_ENDPOINT' con la URL de tu endpoint PHP

        const data = {
            email: formData.email,
            password: formData.password
        };

        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                setMessage('Contraseña actualizada exitosamente');
            } else {
                setMessage(result.message);
            }
        } catch (error) {
            setMessage('Error: ' + error.toString());
        }
    };

    return (
        <>

        <div className='container'>
            <h1>Cambiar Contraseña</h1>
            <h2>Introduzca sus datos para cambiar la contraseña:</h2>
            <form onSubmit={handleSubmit}>
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
        <div className="password-container">
          <label htmlFor="password" className="labelregistro">* Nueva Contraseña:</label>
          <input
          className="inputregistro"
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
          <label htmlFor="passwordVerification" className="labelregistro">* Repita la Contraseña:</label>
          <input
          className="inputregistro"
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
    
                <button type="submit" className='btn'>Confirmar Cambios</button>
                  </form>
            {message && <p>{message}</p>}
           
        </div>
        </>
        )
      
        };


export default ChangePassword;
