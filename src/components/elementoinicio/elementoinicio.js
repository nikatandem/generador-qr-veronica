import React from "react";
import "./elementoinicio.css"


function FrameInicio(){
    return(
        <div className="frame">
            <div className="container">
                <buttton type="submit" className="btn">Crear QR</buttton>
                <buttton type="submit" className="btn">Manual de uso</buttton>
                <buttton type="submit" className="btn">Historial QR</buttton>
                <buttton type="submit" className="btn">Ajustes</buttton>

            </div>
        </div>
    )
}
export default FrameInicio