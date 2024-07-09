import React, { useEffect, useState } from "react";
import EliminarUsuario from "./eliminar-usuario";
import EditarUsuario from "./editar-usuario";
import CambiarRol from "./cambiar-rol-usuario";

function Listar({ url }) {
  const [users, setUsers] = useState([]);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setUsers(data.users);
        setMessage("Esta es la lista de usuarios");
      } catch (error) {
        console.log("Error al buscar la lista de usuarios", error);
        console.error("Stack trace:", error.stack);
        setMessage("Error al buscar la lista de usuarios");
      }
    };
    fetchUsers();
  }, [url]);

  const handleUserDeleted = (userId) => {
    setUsers(users.filter(user => user.id !== userId));
  };

  const tableStyle = {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px"
  };

  const thTdStyle = {
    border: "1px solid #ddd",
    padding: "8px",
    width: "auto",
    textAlign: "left"
  };

  const thStyle = {
    backgroundColor: "#f2f2f2"
  };

  return (
    <>
      <h2>Lista de usuarios</h2>
      <p>{message}</p>
      <table style={tableStyle}>
        <thead>
          <tr>
            <th style={{ ...thTdStyle, ...thStyle }}>ID</th>
            <th style={{ ...thTdStyle, ...thStyle }}>Nombre</th>
            <th style={{ ...thTdStyle, ...thStyle }}>Email</th>
            <th style={{ ...thTdStyle, ...thStyle }}>Delegación</th>
            <th style={{ ...thTdStyle, ...thStyle }}>Rol</th>
            <th style={{ ...thTdStyle, ...thStyle }}>Editar Datos</th>
            <th style={{ ...thTdStyle, ...thStyle }}>Asignar Rol</th>
            <th style={{ ...thTdStyle, ...thStyle }}>Eliminar</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td style={thTdStyle}>{user.id}</td>
              <td style={thTdStyle}>{user.nombre}</td>
              <td style={thTdStyle}>{user.email}</td>
              <td style={thTdStyle}>{user.delegacion}</td>
              <td style={thTdStyle}>{user.role}</td>
              <td style={thTdStyle}><EditarUsuario userId={user.id} /></td>
              <td style={thTdStyle}><CambiarRol userId={user.id} /></td>
              <td style={thTdStyle}>
                <EliminarUsuario userId={user.id} onUserDeleted={handleUserDeleted} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default Listar;
