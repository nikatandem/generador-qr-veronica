import React from "react";
import Layout from "../components/layout"
import FrameInicio from "../components/elementoinicio/elementoinicio";
import { HamburgerMenuPage } from "../components/menulateral/menulateral";
import { Link } from "gatsby";
const Inicio = () => {
    return(
      <>
      <Layout>
   <HamburgerMenuPage/>
      <h1>Inicio</h1>
      <FrameInicio/>
      <Link to="/formulario"><a className="back"> ⍅ Salir</a></Link>
     </Layout>
    
      </>
    )
    }
    
    export default Inicio
    