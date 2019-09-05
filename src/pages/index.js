import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from '../images/Social_minds_logo.svg';
import Social from "../components/social"

const IndexPage = () => (
  <Layout className="homepage" noLogo noSocial>
    <section className="home">
    <SEO title="Home" />
    <h1><img alt="logo" className="logo" src={Logo} width="512"/></h1>
    <p className="subtitle">a podcast by Social Chain</p>
      <div className="social-links">
      <Social/>
        </div>
    </section>
    <div className="theo"></div>
    <div className="eve"></div>
  </Layout>
)
export default IndexPage
