import React from "react";
import Layout from "../components/layout"
import FrameInicio from "../components/elementoinicio/elementoinicio";
import { HamburgerMenuPage } from "../components/menulateral/menulateral";
const Inicio = () => {
    return(
      <>
      <Layout>
   <HamburgerMenuPage/>
      <h1>Inicio</h1>
      <FrameInicio/>
   
     </Layout>
    
      </>
    )
    }
    
    export default Inicio
    