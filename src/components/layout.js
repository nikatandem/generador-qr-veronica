import * as React from "react"
import Header from "./header/header"
import { useStaticQuery, graphql } from "gatsby"
import FooterLogo from "./footer/footerlogos"
import "./layout.css"
import Footer from "./footer/footer"
import { Link } from "gatsby"

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
