import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Logo from '../images/Social_minds_logo.svg';
import Social from "../components/social"
import Podcast from "../components/podcastimg"

const IndexPage = () => (
  <Layout className="homepage">
    <section className="home">
    <SEO title="Home" />
    <h1><img alt="logo" className="logo" src={Logo} width="512"/></h1>
    <p className="subtitle">a podcast by Social Chain</p>
      <div className="social-links">
      <Social/>
        </div>
        <div className="podcast-img">
      <Podcast/>
    </div>
    </section>
  </Layout>
)
export default IndexPage
