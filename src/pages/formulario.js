import * as React from "react";
import Layout from "../components/layout";
import Acceso from "../components/accessform/accessform";
import { Link } from "gatsby";

const Formulario = () => {
  return (
    <>
      <Layout>
       
          <Acceso />
        <div>
          <Link to="/"> ← Volver</Link>
        </div>
      </Layout>
    </>
  );
};

export default Formulario;
