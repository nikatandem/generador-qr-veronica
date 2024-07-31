import React from "react"
import Layout from "../components/layout"
import ListadoQrUser from "../components/listado-qr-user/list-qr-user"
import { HamburgerMenuPage } from "../components/menulateral/menulateral"
function ListaQr() {
  return (
  <>
  <Layout>
    <HamburgerMenuPage/>
  <h1>Lista de QR</h1>
  <ListadoQrUser url="https://veronica.tandempatrimonionacional.eu/api-qr-tandem/v1/list-qr-user.php"></ListadoQrUser>

  </Layout>
  </> 
  )}

export default ListaQr
