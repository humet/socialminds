/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"

import "./layout.scss"

const Layout = ({ children, noLogo, noSocial, className }) => {
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
      <Header noLogo={noLogo} noSocial={noSocial} siteTitle={data.site.siteMetadata.title} />
      <div>
        <main className="container">{children}</main>
      </div>
      <Footer noLogo={noLogo} noSocial={noSocial}/>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  noLogo: PropTypes.bool,
  noSocial: PropTypes.bool,
  className: PropTypes.string  
}

export default Layout
