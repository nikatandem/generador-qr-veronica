import React from "react";
import "../layout.css"
import { StaticImage } from "gatsby-plugin-image"
import { Link } from 'gatsby';

function Logo() {
    return <StaticImage src="../../images/PNnegro.png" alt="Logo Patrimonio Nacional" ></StaticImage>
  }
function Header(){
    
return(
    <>
    <h1 style={{
        marginTop: `var(--space-5)`,
        display: 'flex',
        alignItems: 'center',
      }}>
        <Link to="/"><Logo /></Link>
        Generador de QR
       

      </h1>
    </>

)}


export default Header