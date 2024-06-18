import React from "react";
import Layout from "../components/layout";
import RegistroForm from "../components/registro/registerform";
import { Link } from "gatsby";

const PaginaRegristro = () =>{
        return(
            <Layout>
              <h2>Resgistro nuevo usuario</h2>
                <RegistroForm/>
              <Link to="/formulario"><a className="back"> ← Volver</a></Link>  
            </Layout>
        )
}

export default PaginaRegristro