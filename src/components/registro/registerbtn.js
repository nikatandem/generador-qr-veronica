import React from "react";
import "../layout.css"
import { Link } from 'gatsby';
import "./register.css"

function Register(){
return(
    <Link to="/registro">
    <button className="btn">Registrarse</button>
    </Link>
)
}

export default Register;