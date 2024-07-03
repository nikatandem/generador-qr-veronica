import React from "react";
import Layout from "../components/layout"
import FrameInicio from "../components/elementoinicio/elementoinicio";
import { HamburgerMenuPage } from "../components/menulateral/menulateral";
import { Link } from "gatsby";
import PerfilInfo from "../components/accessform/perfil";
import Login from "../components/accessform/login";

const Inicio = () => {
  
    return(
      <>
      <Layout>
   <HamburgerMenuPage/>
<PerfilInfo/>
      <h1>Inicio</h1>
      <FrameInicio/>
      <Link to="/formulario"><a className="back"> ⍅ Salir</a></Link>
     </Layout>
    
      </>
    )
    }
    
    export default Inicio
    