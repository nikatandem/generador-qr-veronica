import React, { useState, useEffect } from "react";

const PerfilInfo = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const userId = localStorage.getItem('tndm_id');

        if (userId) {
            fetch('http://localhost/api-qr-tandem/v1/get-user.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ id: userId })
            })
            .then(response => response.json())
            .then(data => {
                if (data.user) {
                    setUser(data.user);
                } else {
                    setError('Usuario no encontrado');
                }
                setLoading(false);
            })
            .catch(error => {
                setError(error.message);
                setLoading(false);
            });
        } else {
            setLoading(false);
        }
    }, []);

    if (loading) {
        return <p>Cargando datos de usuario...</p>;
    }

    if (error) {
        return <p>Error al cargar los datos del usuario: {error}</p>;
    }

    return (
        <>
            <p>Sesión iniciada con la cuenta de usuario:</p>
            {user ? (
                <>
                    <p><b>{user.nombre}</b>: <i> {user.email}</i></p>
                </>
            ) : (
                <p>No se han encontrado datos de usuario</p>
            )}
        </>
    );
};

export default PerfilInfo;
