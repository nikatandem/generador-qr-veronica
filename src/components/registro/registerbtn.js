import React from "react";
import { Link } from 'gatsby';
import "./register.css"

function Register(){
return(
    <div><Link to="/registro">
    <button className="btn">Crear cuenta</button>
    </Link></div>
    
)
}

export default Register;