import React, { useState } from "react";
import "./editar-qr.css";

function EditarQR({ qr, onQrUpdated }) {
    const [showModal, setShowModal] = useState(false);
    const [data, setData] = useState(qr.qr_data || "");
    const [nombreRef, setNombreRef] = useState(qr.qr_nombre_ref || "");
    const [description, setDescription] = useState(qr.qr_description || "");
    const [message, setMessage] = useState('');

    const handleUpdate = async () => {
        try {
            const response = await fetch("http://localhost/api-qr-tandem/v1/update-qr.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ id: qr.qr_id, data, nombre_ref: nombreRef, description })
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            const responseData = await response.json();
            console.log("Response data:", responseData);
            const updatedQr = { ...qr, qr_data: data, qr_nombre_ref: nombreRef, qr_description: description };
            setMessage('Código QR actualizado correctamente');
            onQrUpdated(updatedQr);
            setShowModal(false); // Cerrar el modal
        } catch (error) {
            console.error("Error al actualizar el código QR:", error);
            setMessage(`Error al actualizar el código QR: ${error.message}`);
        }
    };

    return (
        <>
            <button className="btn" onClick={() => setShowModal(true)}>Editar</button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <h3>Editar Código QR</h3>
                        <label>
                            Data:
                            <input type="text" value={data} onChange={(e) => setData(e.target.value)} />
                        </label>
                        <label>
                            Nombre de Referencia:
                            <input type="text" value={nombreRef} onChange={(e) => setNombreRef(e.target.value)} />
                        </label>
                        <label>
                            Descripción:
                            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </label>
                        <button onClick={handleUpdate}>Guardar</button>
                        <button onClick={() => setShowModal(false)}>Cancelar</button>
                        {message && <p>{message}</p>}
                    </div>
                </div>
            )}
        </>
    );
}

export default EditarQR;
