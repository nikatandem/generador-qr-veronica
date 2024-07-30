import React from "react"
import Layout from "../components/layout"
import Listar from "../components/admin/listar-usuarios"
import AgregarUsuario from "../components/admin/agregar-usuario"
import { HamburgerMenuPage } from "../components/menulateral/menulateral"
function ListaUsuarios() {
  return (
  <>
  <Layout>
    <HamburgerMenuPage/>
  <h1>Lista de usuarios</h1>
  <Listar url="https://veronica.tandempatrimonionacional.eu/api-qr-tandem/v1/list-users.php"></Listar>
  <AgregarUsuario/>
  </Layout>
  </> 
  )}

export default ListaUsuarios
