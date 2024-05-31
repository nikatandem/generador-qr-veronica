import React from "react";
import { useStaticQuery, graphql } from "gatsby"
import "../layout.css"
import { StaticImage } from "gatsby-plugin-image"

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
        <Logo /> Generador de QR
      </h1>
    </>

)}


export default Header