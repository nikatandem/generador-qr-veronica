import React, { useState } from "react";
import "./cambiar-rol.css"

function CambiarRol({ userEmail, onRoleChanged }) {
    const [showModal, setShowModal] = useState(false);
    const [selectedRole, setSelectedRole] = useState("");
    const [message, setMessage] = useState("");
  
    const handleRoleChange = async () => {
      try {
        const response = await fetch("http://localhost/api-qr-tandem/v1/change-role.php", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userEmail, role: selectedRole }),
        });
  
        if (!response.ok) {
          const errorData = await response.json();
          throw new Error(errorData.message || `HTTP error! status: ${response.status}`);
        }
  
        const data = await response.json();
        console.log("Response data:", data);
        onRoleChanged(userEmail, selectedRole); // Actualiza el estado de los usuarios
        setMessage(`Rol asignado correctamente: ${selectedRole}`);
        setShowModal(false); // Cierra el modal
      } catch (error) {
        console.error("Error al cambiar el rol:", error);
        setMessage(`Error al cambiar el rol: ${error.message}`);
      }
    };
  
    return (
      <>
        <button className="btn" onClick={() => setShowModal(true)}>Asignar</button>
        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={() => setShowModal(false)}>&times;</span>
              <h3>Cambiar Rol</h3>
              <select value={selectedRole} onChange={(e) => setSelectedRole(e.target.value)}>
                <option value="">Seleccionar rol</option>
                <option value="admin">Admin</option>
                <option value="employee">Employee</option>
                <option value="guest">Guest</option>
              </select>
              <button onClick={handleRoleChange}>Guardar</button>
              <button onClick={() => setShowModal(false)}>Cancelar</button>
              {message && <p>{message}</p>}
            </div>
          </div>
        )}
      </>
    );
  }
  
  export default CambiarRol;