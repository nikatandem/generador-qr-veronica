import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
<<<<<<< HEAD
            const peticion = await fetch('http://localhost/api-qr-tandem/v1/login-user.php', {
=======
            const peticion = await fetch('http://localhost/api-qr-tandem/v1/login-users.php', {
>>>>>>> 1d8f7c67d83143cf010ee493749384fe5490ef07
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const respuesta = await peticion.json();
            console.log(respuesta);

            if (respuesta.message === 'Login exitoso') {
                // Guardar la información del usuario en localStorage
                localStorage.setItem('tndm_id', respuesta.user.id);
                localStorage.setItem('tndm_nombre', respuesta.user.nombre);
                localStorage.setItem('tndm_email', respuesta.user.email);
                localStorage.setItem('tndm_token', respuesta.token);

                setMessage('Login exitoso');
                window.location.href = '/inicio'; // Redirigir a la página de inicio
            } else {
                setMessage('Credenciales incorrectas');
            }
        } catch (error) {
<<<<<<< HEAD
=======
            console.error('Error en el login', error);
>>>>>>> 1d8f7c67d83143cf010ee493749384fe5490ef07
            setMessage('Error en el login');
        }
    };

    return (
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
                    className='campo'
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className='log'>
<<<<<<< HEAD
                <label htmlFor='password' className='datos'>Introduzca contraseña:</label>
                <input
                id='password'
=======
                <p className='datos'>Introduzca contraseña:</p>
                <input
>>>>>>> 1d8f7c67d83143cf010ee493749384fe5490ef07
                    className='campo'
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
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
    );
};

export default Login;
