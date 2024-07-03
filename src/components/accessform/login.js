import React, { useState } from 'react';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async () => {
        try {
            const peticion = await fetch('http://localhost/api-qr-tandem/v1/login-user.php', {
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
            setMessage('Error en el login');
        }
    };

    return (
   <>
  
            <div className='log'>
                
                <label htmlFor='email' className='datos'>Introduzca su email:</label>
                <input
                id='email'
                    className='campo'
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </div>
            <div className='log'>
                <label htmlFor='password' className='datos'>Introduzca contraseña:</label>
                <input
                id='password'
                    className='campo'
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                     autocomplete="new-password"
                    required
                />
                 
            </div>
      
            <button className='btn-acceder' onClick={handleLogin}>Acceder</button>
           
            <p>{message}</p> 
    
    </>
     
    );
};

export default Login;
