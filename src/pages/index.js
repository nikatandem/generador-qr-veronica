import * as React from "react"
import Access from "../components/accesbutton/accesbutton"
import ButtonInfo from "../components/btninformacióninstitucional/informacionbutton"
import Layout from "../components/layout"
import Slider from "../components/slider/slider"

const IndexPage = () =>{
return(
  <>
  <Layout>  
    <Access/>
    <h2>Bienvenido al Generador de QR</h2>

<Slider/>
<ButtonInfo/>
  </Layout>

  </>
)
}

export default IndexPage


