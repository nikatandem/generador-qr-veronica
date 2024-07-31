import React, { useState } from 'react';

const Login = ({ onError }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleLogin = async () => {
        if (!email || !password) {
            setMessage('Por favor, complete todos los campos.');
            return;
        }

        setIsLoading(true);
        setMessage('');
        try {
            const response = await fetch('https://veronica.tandempatrimonionacional.eu/api-qr-tandem/v1/login-user.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });

            const result = await response.json();

            if (response.ok && result.message === 'Login exitoso') {
                localStorage.setItem('tndm_id', result.user.id);
                localStorage.setItem('tndm_nombre', result.user.nombre);
                localStorage.setItem('tndm_email', result.user.email);
                localStorage.setItem('tndm_token', result.token);
                
                setMessage('Login exitoso');
                window.location.href = '/inicio'; // Mejor usar react-router para la navegación
            } else {
                setMessage(result.message || 'Credenciales incorrectas');
                onError(result.message || 'Credenciales incorrectas');
            }
        } catch (error) {
            setMessage('Error en el login');
            onError('Error en el login');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <>
            <div className='log'>
                <h3>Introduzca sus credenciales</h3>
                <label htmlFor='email' className='datos'>Introduzca su email:</label>
                <input
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
                <label htmlFor='password' className='datos'>Introduzca contraseña:</label>
                <input
                    id='password'
                    className='campo'
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    autoComplete="new-password"
                    required
                />
            </div>
            <button className='btn-acceder' onClick={handleLogin} disabled={isLoading}>
                {isLoading ? 'Cargando...' : 'Acceder'}
            </button>
            {message && <p>{message}</p>}
        </>
    );
};

export default Login;
