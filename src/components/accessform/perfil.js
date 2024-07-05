// src/components/accessform/perfil.js
import React from "react";

const PerfilInfo = ({ user }) => {
    if (!user) {
        return <p>No se han encontrado datos de usuario</p>;
    }

    return (
        <>
            <p>Sesión iniciada con la cuenta de usuario:</p>
            <p><b>{user.nombre}</b>: <i>{user.email}</i></p>
        </>
    );
};

export default PerfilInfo;
