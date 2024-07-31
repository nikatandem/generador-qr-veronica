import React, { useEffect, useState } from "react";
import EliminarQR from "./eliminar-qr";
import EditarQR from "./editar-qr";
import "./editar-qr.css"; // Asegúrate de tener un archivo CSS para los estilos

function ListadoQR({ url }) {
    const [qrCodes, setQrCodes] = useState([]);
    const [message, setMessage] = useState("");
    const [searchTerm, setSearchTerm] = useState("");

    useEffect(() => {
        const fetchQrCodes = async () => {
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
                setQrCodes(data.qr_codes || []);
            } catch (error) {
                console.error("Error al buscar la lista de códigos QR:", error);
                setMessage("Error al buscar la lista de códigos QR");
            }
        };
        fetchQrCodes();
    }, [url]);

    const handleQrDeleted = (qrId) => {
        setQrCodes(qrCodes.filter(qr => qr.qr_id !== qrId));
    };

    // Filtrar los códigos QR según el término de búsqueda
    const filteredQrCodes = qrCodes.filter(qr =>
        qr.qr_nombre_ref.toLowerCase().includes(searchTerm.toLowerCase())
    );

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
            <label htmlFor="search-form">
                <span className="sr-only">Buscar por nombre de referencia:</span>
                <input
                    type="search"
                    name="search-form"
                    id="search-form"
                    className="search-input"
                    placeholder="Buscar por nombre de referencia"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    style={{ width: '400px', height: '40px', fontSize: '16px', padding: '10px' }}
                />
            </label>
            <table style={tableStyle}>
                <thead>
                    <tr>
                        <th style={{ ...thTdStyle, ...thStyle }}>QR ID</th>
                        <th style={{ ...thTdStyle, ...thStyle }}>Data</th>
                        <th style={{ ...thTdStyle, ...thStyle }}>Nombre de Referencia</th>
                        <th style={{ ...thTdStyle, ...thStyle }}>Descripción</th>
                        <th style={{ ...thTdStyle, ...thStyle }}>User ID</th>
                        <th style={{ ...thTdStyle, ...thStyle }}>Editar</th>
                        <th style={{ ...thTdStyle, ...thStyle }}>Eliminar</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredQrCodes.map((qr) => (
                        <tr key={qr.qr_id}>
                            <td style={thTdStyle}>{qr.qr_id}</td>
                            <td style={thTdStyle}>{qr.qr_data}</td>
                            <td style={thTdStyle}>{qr.qr_nombre_ref}</td>
                            <td style={thTdStyle}>{qr.qr_description}</td>
                            <td style={thTdStyle}>{qr.user_id}</td>
                            <td style={thTdStyle}>
                                <EditarQR qr={qr} onQrUpdated={(updatedQr) => setQrCodes(qrCodes.map(u => u.qr_id === updatedQr.qr_id ? updatedQr : u))} />
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
