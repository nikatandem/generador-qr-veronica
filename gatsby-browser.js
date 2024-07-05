
// Ajusta la ruta según sea necesario
import "bootstrap/dist/css/bootstrap.min.css";
// gatsby-browser.js
import "@fortawesome/fontawesome-svg-core/styles.css"; // Importa los estilos de Font Awesome
import { config } from "@fortawesome/fontawesome-svg-core"; // Importa la configuración de Font Awesome

data: () => ({
    showMessage: process.isClient
        ? !localStorage.getItem("hideMessage")
        : false,
})