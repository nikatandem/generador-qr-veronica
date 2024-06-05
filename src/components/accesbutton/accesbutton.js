import React from "react";
import "../layout.css"
import Formulario from "../../pages/formulario";
import { Link } from 'gatsby';


function Access(){
return(
    <Link to="/formulario">
    <button className="btnaccess">Iniciar sesión</button>
    </Link>
)
}

export default Access;