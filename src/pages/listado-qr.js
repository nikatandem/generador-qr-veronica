import React from "react"
import Layout from "../components/layout"
import ListadoQR from "../components/admin/listar-qr"
import { HamburgerMenuPage } from "../components/menulateral/menulateral"
function ListaQr() {
  return (
  <>
  <Layout>
    <HamburgerMenuPage/>
  <h1>Lista de QR</h1>
  <ListadoQR url="http://localhost/api-qr-tandem/v1/list-qr.php"></ListadoQR>

  </Layout>
  </> 
  )}

export default ListaQr
