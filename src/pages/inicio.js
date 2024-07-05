// src/components/inicio.js
import React, { useEffect, useState } from "react";
import Layout from "../components/layout";
import FrameInicio from "../components/elementoinicio/elementoinicio";
import { HamburgerMenuPage } from "../components/menulateral/menulateral";
import { Link } from "gatsby";
import PerfilInfo from "../components/accessform/perfil";

const Inicio = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    

    useEffect(() => {
        const tndm_id = localStorage.getItem('tndm_id');
        const tndm_nombre = localStorage.getItem('tndm_nombre');
        const tndm_email = localStorage.getItem('tndm_email');

        if (tndm_id && tndm_nombre && tndm_email) {
            setUser({
                id: tndm_id,
                nombre: tndm_nombre,
                email: tndm_email
            });
        } else {
            // Redirigir al usuario a la página de inicio de sesión si no está autenticado
            window.location.href = '/acceso';
        }

        setLoading(false);
    }, []);

    if (loading) {
        return <p>Cargando...</p>;
    }

    return (
        <>
            <Layout>
                <HamburgerMenuPage />
                <PerfilInfo user={user} />
                <h1>Inicio</h1>
                <FrameInicio />
                <Link to="/formulario">⍅ Salir</Link>
            </Layout>
        </>
    );
};

export default Inicio;
