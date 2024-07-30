import React, { useState } from "react";

function EliminarQR({ qrId, onQrDeleted }) {
    const [message, setMessage] = useState('');

    const handleDelete = async () => {
        const confirmed = window.confirm("¿Está seguro de que quiere eliminar este código QR?");
        if (confirmed) {
            try {
                const response = await fetch(
                    "https://veronica.tandempatrimonionacional.eu/api-qr-tandem/v1/delete-qr.php",
                    {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ id: qr.qr_id })
                    }
                );
    
                if (!response.ok) {
                    const data = await response.json();
                    throw new Error(data.message || `HTTP error! status: ${response.status}`);
                }
    
                setMessage('Código QR eliminado correctamente');
                onQrDeleted(qrId);
            } catch (error) {
                console.error("Error al eliminar el código QR:", error);
                setMessage('Error al eliminar el código QR');
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

export default EliminarQR;
