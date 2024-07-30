import React, { useState } from "react";

function EliminarUsuario({ userId, onUserDeleted }) {
    const [message, setMessage] = useState('');

    const handleDelete = async () => {
        const confirmed = window.confirm("¿Está seguro de que quiere eliminar a este usuario?");
        if (confirmed) {
            try {
                const response = await fetch(
                    "https://veronica.tandempatrimonionacional.eu/api-qr-tandem/v1/delete-user.php",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ id: userId })
                    }
                );
                if (!response.ok) {
                    const data = await response.json().catch(() => {
                        throw new Error(`HTTP error! status: ${response.status}`);
                    });
                    throw new Error(data.message || `HTTP error! status: ${response.status}`);
                }

                setMessage('Usuario eliminado correctamente');
                onUserDeleted(userId);
            } catch (error) {
                console.error("Error al eliminar el usuario:", error);
                setMessage('Error al eliminar el usuario');
            }
        }
    };

    return (
        <div>
            <button className="btn" onClick={handleDelete}>Eliminar</button>
            {message && <p>{message}</p>}
        </div>
    );
}

export default EliminarUsuario;
