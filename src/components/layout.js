import * as React from "react"
import Header from "./header/header"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.css"
import Footer from "./footer/footer"



const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
        title
        }
      }
    }
  `)

  return (
    <>
      <Header/>
      <div className="footer"
        style={{
          margin: `0 auto`,
          maxWidth: `var(--size-content)`,
          padding: `var(--size-gutter)`,
         
        }}
      >
        <main>{children}</main>
      <Footer/>
      
      
      </div>
    </>
  )
}

export default Layout
