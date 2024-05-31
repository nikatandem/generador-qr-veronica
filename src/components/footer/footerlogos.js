import React from "react";
import "../layout.css"
import { StaticImage } from "gatsby-plugin-image"
import "../layout.css"; // Asegúrate de importar tu archivo CSS

function Logo1() {
  return <StaticImage src="../../images/logo1.jpg" alt="Logo 1" className="logo-image" />;
}

function Logo2() {
  return <StaticImage src="../../images/logo2.jpg" alt="Logo 2" className="logo-image" />;
}

function Logo3() {
  return <StaticImage src="../../images/logo3.png" alt="Logo 3" className="logo-image" />;
}

function Logo4() {
  return <StaticImage src="../../images/PNnegro.png" alt="Logo 4" className="logo-image" />;
}

function Logo5() {
  return <StaticImage src="../../images/logo5.png" alt="Logo 5" className="logo-image" />;
}

export { Logo1, Logo2, Logo3, Logo4, Logo5 };


function FooterLogo(){
return(
    <div>
      <Logo1 />
      <Logo2 />
      <Logo3 />
      <Logo4 />
      <Logo5 />
    </div>)
}

export default FooterLogo