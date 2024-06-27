import React from "react";
import "../layout.css"
import { Link } from 'gatsby';
import "./accessbtn.css"

function Access(){
return(
    <Link to="/formulario">
    <button className="btn">Acceder a la APP</button>
    </Link>
)
}

export default Access;