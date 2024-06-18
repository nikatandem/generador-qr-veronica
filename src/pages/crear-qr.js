import * as React from "react"
import Layout from "../components/layout"
import { HamburgerMenuPage } from "../components/menulateral/menulateral";
import { Link } from "gatsby";
// import Generador from "../components/generador-qr/generador-qr";
import QrCodeGenerator from "../components/generador-qr/generador-qr";

const CrearQr = () =>{
    return(
      <>
      <Layout>
      <HamburgerMenuPage/>
      <h1>Generador de Códigos QR</h1>
      
  <QrCodeGenerator/>
  <Link to="/inicio"><a className="back"> ← Volver</a></Link>
      </Layout>
    
      </>
    )
    }
    
    export default CrearQr
