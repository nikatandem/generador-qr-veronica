import React, { useState} from 'react';
const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const handleLogin = async () => {
        try {
            const peticion = await fetch('http://localhost/api-qr-tandem/v1/login-users.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const respuesta = await peticion.json();
            console.log(respuesta)
            if (respuesta.message === 'Login exitoso') {
                // Aquí podrías guardar el usuario en el estado global o en localStorage
                setMessage('Login exitoso para el usuario con id:'+ respuesta.user.id);
                localStorage.setItem('tndm_id', respuesta.user.id) 
                localStorage.setItem('tndm_nombre', respuesta.user.nombre)
                localStorage.setItem('tndm_email', respuesta.user.email)
                localStorage.setItem('tndm_token', respuesta.token)
               
                window.location.href = '/inicio';
            } else
                setMessage('Credenciales incorrectas');
            }
        catch(error) {
            console.error('Error en el login', error);
            setMessage('Error en el login');
        }
    };
    return (
        <div>
            <div className='log'>
            <p className='datos'>Introduzca su email:</p>
            <input
            className='campo'
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            </div>
            <div className='log'>
                <p className='datos'>Introduzca contraseña:</p>
            <input
            className='campo'
                type="password"
                placeholder="Contraseña"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            
            </div>
            <button className='btn-acceder' onClick={handleLogin}>Acceder</button>
            <p>{message}</p>
        </div>
    );
};
export default Login;