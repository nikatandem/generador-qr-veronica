import React from "react";
import "./elementoinicio.css"
import { Link } from "gatsby";

function FrameInicio(){
    return(
        <div className="frame">
            <div className="container">
                <Link to="/crear-qr"><buttton type="submit" className="btn">Crear QR</buttton></Link>
                <Link><buttton type="submit" className="btn">Manual de uso</buttton></Link>
                <Link><buttton type="submit" className="btn">Historial QR</buttton></Link>
                <Link><buttton type="submit" className="btn">Ajustes</buttton></Link>

            </div>
        </div>
    )
}
export default FrameInicio