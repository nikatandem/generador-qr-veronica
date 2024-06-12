import "bootstrap/dist/css/bootstrap.min.css";
// gatsby-browser.js
import "@fortawesome/fontawesome-svg-core/styles.css"; // Importa los estilos de Font Awesome
import { config } from "@fortawesome/fontawesome-svg-core"; // Importa la configuración de Font Awesome
config.autoAddCss = false; // Desactiva la inserción automática de CSS

exports.onClientEntry = () => {
    // Este código solo se ejecuta en el cliente
    var requestFn = window.requestAnimationFrame || getPrefixed('RequestAnimationFrame') || timeoutDefer;
    var cancelFn = window.cancelAnimationFrame || getPrefixed('CancelAnimationFrame') || getPrefixed('CancelRequestAnimationFrame') || function (id) { window.clearTimeout(id); };
  };
  