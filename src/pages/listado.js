import React from "react"
import Layout from "../components/layout"
import Listar from "../components/admin/listar-usuarios"

function ListaUsuarios() {
  return (
  <>
  <Layout>
  <h1>Lista de usuarios</h1>
  <Listar url="http://localhost/api-qr-tandem/v1/list-users.php"></Listar>
  </Layout>
  </> 
  )}

export default ListaUsuarios
