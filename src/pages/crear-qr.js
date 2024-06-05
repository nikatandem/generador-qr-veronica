import * as React from "react"
import Layout from "../components/layout"
import { HamburgerMenuPage } from "../components/menulateral/menulateral";
// import Generador from "../components/generador-qr/generador-qr";
import QrCodeGenerator from "../components/generador-qr/generador-qr";

const CrearQr = () =>{
    return(
      <>
      <Layout>
      <HamburgerMenuPage/>
        <h1>Creando QR</h1>
  <QrCodeGenerator/>
      </Layout>
    
      </>
    )
    }
    
    export default CrearQr
