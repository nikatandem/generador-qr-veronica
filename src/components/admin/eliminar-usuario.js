import React, { useState } from "react";

function EliminarUsuario({ userId, onUserDeleted }) {
  const [message, setMessage] = useState('');

  const handleDelete = async () => {
    const confirmed = window.confirm("¿Está seguro de que quiere eliminar a este usuario?");
    if (confirmed) {
      try {
        console.log(`Deleting user with ID: ${userId}`); // Log de depuración
        const response = await fetch(
          "http://localhost/api-qr-tandem/v1/delete-user.php",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify({ id: userId })
          }
        );
        console.log(`Response status: ${response.status}`); // Log de depuración
        if (!response.ok) {
          const data = await response.json();
          console.log('Response data:', data); // Log de depuración
          throw new Error(`HTTP error! status: ${response.status}`);
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
