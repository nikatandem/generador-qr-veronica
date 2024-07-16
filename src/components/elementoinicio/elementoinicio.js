import React from "react";
import "./elementoinicio.css"
import { Link } from "gatsby";

function FrameInicio(){
    return(
       
            <div className="contenedor" id="frame">
                <Link to="/crear-qr"><buttton type="submit" className="btn">Crear QR</buttton></Link>
                <Link to="/manualuso"><buttton type="submit" className="btn">Manual de uso</buttton></Link>
                <Link to="/listado-qr"><buttton type="submit" className="btn">Historial QR</buttton></Link>
                <Link><buttton type="submit" className="btn">Ajustes</buttton></Link>

            </div>
  
    )
}
export default FrameInicio