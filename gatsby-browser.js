
//Cada objeto Context viene con un componente Provider de React que permite que los componentes que lo consumen se suscriban a los cambios del contexto.
import React from 'react';
import { UserProvider } from '/src/context/UserContext';
import { getPrefixed, timeoutDefer } from './utils';
// Ajusta la ruta según sea necesario
import "bootstrap/dist/css/bootstrap.min.css";
// gatsby-browser.js
import "@fortawesome/fontawesome-svg-core/styles.css"; // Importa los estilos de Font Awesome
import { config } from "@fortawesome/fontawesome-svg-core"; // Importa la configuración de Font Awesome

config.autoAddCss = false; // Desactiva la inserción automática de CSS

export const wrapRootElement = ({ element }) => (
    <UserProvider>{element}</UserProvider>
);