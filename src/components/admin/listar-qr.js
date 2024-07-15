import React, { useEffect, useState } from "react";
import EliminarQR from "./eliminar-qr";
import EditarQR from "./editar-qr";
import "./editar-qr.css"; // Asegúrate de tener un archivo CSS para los estilos

function ListadoQR({ url }) {
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
                setUsers(data.qr_codes);
            } catch (error) {
                console.log("Error al buscar la lista de usuarios", error);
                console.error("Stack trace:", error.stack);
                setMessage("Error al buscar la lista de usuarios");
            }
        };
        fetchUsers();
    }, [url]);

    const handleQrDeleted = (qrId) => {
        setUsers(users.filter(qr => qr.qr_id !== qrId));
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
            <h2>Códigos QR registrados</h2>
        
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={{ ...thTdStyle, ...thStyle }}>ID</th>
                        <th style={{ ...thTdStyle, ...thStyle }}>Data</th>
                        <th style={{ ...thTdStyle, ...thStyle }}>Nombre de Referencia</th>
                        <th style={{ ...thTdStyle, ...thStyle }}>Descripción</th>
                        <th style={{ ...thTdStyle, ...thStyle }}>Usuario Creador</th>
                        <th style={{ ...thTdStyle, ...thStyle }}>Editar</th>
                        <th style={{ ...thTdStyle, ...thStyle }}>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((qr) => (
                        <tr key={qr.qr_id}>
                            <td style={thTdStyle}>{qr.qr_id}</td>
                            <td style={thTdStyle}>{qr.qr_data}</td>
                            <td style={thTdStyle}>{qr.qr_nombre_ref}</td>
                            <td style={thTdStyle}>{qr.qr_description}</td>
                            <td style={thTdStyle}>{qr.user_nombre}</td>
                            <td style={thTdStyle}>
                                <EditarQR qr={qr} onQrUpdated={(updatedQr) => setUsers(users.map(u => u.qr_id === updatedQr.qr_id ? updatedQr : u))} />
                            </td>
                            <td style={thTdStyle}>
                                <EliminarQR qrId={qr.qr_id} onQrDeleted={handleQrDeleted} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}

export default ListadoQR;
