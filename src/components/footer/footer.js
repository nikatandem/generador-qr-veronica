import React from "react";
import "../layout.css"
import FooterLogo from "./footerlogos";
function Footer(){
return(
    <footer className="footer"
    style={{
      fontSize: `var(--font-sm)`,
    }}
  >
    
    <div><a href="https://www.patrimonionacional.es/accesibilidad"> Accesibilidad|</a> <a href="https://www.patrimonionacional.es/politica-de-privacidad"> Política de privacidad|</a> <a href="https://www.patrimonionacional.es/aviso-legal"> Aviso Legal|</a> <a href="https://www.patrimonionacional.es/politica-de-cookies">Política de Cookies</a> </div>
    <div>© {new Date().getFullYear()} &middot; TandEM Aranjuez, todos los derechos reservados.
    {` `}</div>
    <div><FooterLogo/></div>
    
  </footer>)
}

export default Footer