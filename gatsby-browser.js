import { getPrefixed, timeoutDefer } from './utils'; // Ajusta la ruta según sea necesario
import "bootstrap/dist/css/bootstrap.min.css";
// gatsby-browser.js
import "@fortawesome/fontawesome-svg-core/styles.css"; // Importa los estilos de Font Awesome
import { config } from "@fortawesome/fontawesome-svg-core"; // Importa la configuración de Font Awesome
config.autoAddCss = false; // Desactiva la inserción automática de CSS


export const onClientEntry = () => {
  if (typeof window !== 'undefined') {
    const requestFn = window.requestAnimationFrame || getPrefixed('requestAnimationFrame') || timeoutDefer;
    const cancelFn = window.cancelAnimationFrame || getPrefixed('cancelAnimationFrame') || getPrefixed('cancelRequestAnimationFrame') || function (id) { window.clearTimeout(id); };
    // Aquí puedes añadir cualquier otro código que use `window`.
    console.log('El código que usa `window` se está ejecutando.');
  }
};
