import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from '../images/Social_minds_logo.svg';

const IndexPage = () => (
  <Layout noLogo noSocial>
    <section className="home">
    <SEO title="Home" />
    <h1><img alt="logo" src={Logo} width="512"/></h1>
    <p>a podcast by Social Chain</p>
    </section>
  </Layout>
)
export default IndexPage
