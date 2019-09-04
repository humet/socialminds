import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Logo from '../images/socialminds.svg';

const IndexPage = () => (
  <Layout noLogo noSocial>
    <section className="home">
    <SEO title="Home" />
    <h1><img src={Logo} /></h1>
    <p>a podcast by Social Chain</p>
    </section>
  </Layout>
)
export default IndexPage
