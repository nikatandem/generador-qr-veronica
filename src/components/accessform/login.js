// src/components/accessform/login.js
import React, { useState } from 'react';

const Login = ({ onError }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        setIsLoading(true);
        setMessage('');
        try {
<<<<<<< HEAD
<<<<<<< HEAD
            const peticion = await fetch('http://localhost/api-qr-tandem/v1/login-user.php', {
=======
            const peticion = await fetch('http://localhost/api-qr-tandem/v1/login-users.php', {
>>>>>>> 1d8f7c67d83143cf010ee493749384fe5490ef07
=======
            const response = await fetch('http://localhost/api-qr-tandem/v1/login-user.php', {
>>>>>>> develop
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();
            console.log(result);

            if (response.ok && result.message === 'Login exitoso') {
                // Guardar la información del usuario en localStorage
                localStorage.setItem('tndm_id', result.user.id);
                localStorage.setItem('tndm_nombre', result.user.nombre);
                localStorage.setItem('tndm_email', result.user.email);
                localStorage.setItem('tndm_token', result.token);

                setMessage('Login exitoso');
                window.location.href = '/inicio'; // Redirigir a la página de inicio
            } else {
                setMessage('Credenciales incorrectas');
                onError('Credenciales incorrectas');
            }
        } catch (error) {
<<<<<<< HEAD
<<<<<<< HEAD
=======
            console.error('Error en el login', error);
>>>>>>> 1d8f7c67d83143cf010ee493749384fe5490ef07
=======
>>>>>>> develop
            setMessage('Error en el login');
            onError('Error en el login');
        } finally {
            setIsLoading(false);
        }
    };

    return (
<<<<<<< HEAD
<<<<<<< HEAD
   <>
  
            <div className='log'>
                
                <label htmlFor='email' className='datos'>Introduzca su email:</label>
                <input
                id='email'
=======
        <div>
            <div className='log'>
                <p className='datos'>Introduzca su email:</p>
                <input
>>>>>>> 1d8f7c67d83143cf010ee493749384fe5490ef07
=======
        <>
            <div className='log'>
                <p className='datos'>Introduzca su email:</p>
                <input
>>>>>>> develop
                    className='campo'
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    autoComplete='username'
                    required
                />
            </div>
            <div className='log'>
<<<<<<< HEAD
<<<<<<< HEAD
                <label htmlFor='password' className='datos'>Introduzca contraseña:</label>
                <input
                id='password'
=======
                <p className='datos'>Introduzca contraseña:</p>
                <input
>>>>>>> 1d8f7c67d83143cf010ee493749384fe5490ef07
=======
                <label htmlFor='password' className='datos'>Introduzca contraseña:</label>
                <input
                    id='password'
>>>>>>> develop
                    className='campo'
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
<<<<<<< HEAD
<<<<<<< HEAD
                     autocomplete="new-password"
                    required
                />
                 
            </div>
      
            <button className='btn-acceder' onClick={handleLogin}>Acceder</button>
           
            <p>{message}</p> 
    
    </>
     
=======
                    required
                />
            </div>
            <button className='btn-acceder' onClick={handleLogin}>Acceder</button>
            <p>{message}</p>
        </div>
>>>>>>> 1d8f7c67d83143cf010ee493749384fe5490ef07
=======
                    autoComplete="new-password"
                    required
                />
            </div>
            <button className='btn-acceder' onClick={handleLogin} disabled={isLoading}>
                {isLoading ? 'Cargando...' : 'Acceder'}
            </button>
            {message && <p>{message}</p>}
        </>
>>>>>>> develop
    );
};

export default Login;
