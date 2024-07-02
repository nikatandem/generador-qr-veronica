import React from "react";
import ChangePassword from "../components/changepassword/change";
import Layout from "../components/layout"
import { Link } from "gatsby";

const Change = () => {
  
    return(
      <Layout>
   <ChangePassword/>

   <div>
    <Link to="/formulario"><a className="back"> ← Volver</a>
    </Link>
    </div>
      </Layout>
    )
    }
    
    export default Change
    