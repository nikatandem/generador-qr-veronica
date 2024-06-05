import React from "react";
import Layout from "../components/layout"
import FrameInicio from "../components/elementoinicio/elementoinicio";
import MenuLateral from "../components/menulateral/menulateral";
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
    