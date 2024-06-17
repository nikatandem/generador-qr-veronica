import * as React from "react"
import Layout from "../components/layout"
import Acceso from "../components/accessform/accessform"
import Register from "../components/registro/registerbtn"

const Formulario = () =>{
    return(
      <>
      <Layout>
        <h2>Inicio de sesión</h2>
    
    <Acceso/>
    <Register></Register>
 
      </Layout>
    
      </>
    )
    }
    
    export default Formulario
