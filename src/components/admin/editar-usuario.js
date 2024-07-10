import React, { useState } from "react";
import "./editar-usuario.css";

function EditarUsuario({ user, onUserUpdated }) {
    const [showModal, setShowModal] = useState(false);
    const [nombre, setNombre] = useState(user?.nombre || "");
    const [delegacion, setDelegacion] = useState(user?.delegacion || "");
    const [message, setMessage] = useState("");

    const handleUpdate = async () => {
        try {
            const response = await fetch("http://localhost/api-qr-tandem/v1/update-user.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ nombre, email: user.email, delegacion }),
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log("Response data:", data);
            if (data.message === "El usuario ha sido actualizado exitosamente") {
                onUserUpdated({ ...user, nombre, delegacion });
                setMessage(data.message);
                setShowModal(false); // Close the modal
            } else {
                setMessage(data.message);
            }
        } catch (error) {
            console.error("Error al actualizar el usuario:", error);
            setMessage(`Error al actualizar el usuario: ${error.message}`);
        }
    };

    return (
        <>
            <button className="btn" onClick={() => setShowModal(true)}>Editar</button>
            {showModal && (
                <div className="modal">
                    <div className="modal-content">
                        <span className="close" onClick={() => setShowModal(false)}>&times;</span>
                        <h3>Editar Usuario</h3>
                        <label>
                            Nombre:
                            <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                        </label>
                        <label>
                            Delegación:
                            <select value={delegacion} onChange={(e) => setDelegacion(e.target.value)}>
                                <option value="">Seleccione una delegación</option>
                                <option value="La Almudaina">La Almudaina</option>
                                <option value="Aranjuez">Aranjuez</option>
                                <option value="El Pardo">El Pardo</option>
                                <option value="San Ildefonso">San Ildefonso</option>
                                <option value="San Jerónimo de Yuste">San Jerónimo de Yuste</option>
                                <option value="San Lorenzo de El Escorial">San Lorenzo de El Escorial</option>
                                <option value="Reales Patronatos">Reales Patronatos</option>
                            </select>
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

export default EditarUsuario;
