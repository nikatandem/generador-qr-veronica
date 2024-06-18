import * as React from "react"
import Layout from "../components/layout"
import Acceso from "../components/accessform/accessform"
import { Link } from "gatsby"
const Formulario = () =>{
    return(
      <>
      <Layout>
        <h2>Inicio de sesión</h2>
    
    <Acceso/>

  <div><Link to="/"><a className="back"> ← Volver</a></Link></div>
    
      </Layout>
    
      </>
    )
    }
    
    export default Formulario
