import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LogoWhite from '../images/Social_minds_logo_White.svg';
import HostTheo from '../images/Theo_SM.svg';
import Hosteve from '../images/Eve_SM.svg';

const AboutPage = () => (
  <Layout className="aboutpage about-hero-img">
    <div className="hero-text">
    <SEO title="About" />
      <h1><img alt="logo" src={LogoWhite} width="512"/></h1>
      <p>Social Minds is the UK’s first-ever dedicated social media marketing podcast, brought to you by Social Chain. Each week we’re joined by leaders - in all sectors - to learn the global impact social media is having on every corner of the business world. We translate the marketing jargon you hear every day, leave buzzwords at the door and speak to social media headlines in a way anyone can understand.</p>
      </div>
    <section className="about">
    <h2>Hosted by...</h2>
    <div className="host">
      <div className="host__block">
        <div className="host__img"><img alt="Theo" src={HostTheo} width="150"/></div>
        <div className="host__name">Theo Watt</div>
        <div className="host__job-title">Senior Copywritter, Social Chain</div>
        <div className="host__bio">Theo’s background in journalism gives him an investigative edge in social; his analytical view of the landscape means he can contextualise trending topics. His lifelong passion for advertising means he has a deep understanding of brand activity, both past and present. Having worked for brands such as Viacom and MTV UK and now writing for accounts such as Superdry and Nokia, he is skilled in knowing what sells on social.</div>
      </div>
      <div className="host__block">
        <div className="host__img"><img alt="Eve" src={Hosteve} width="150"/></div>
        <div className="host__name">Eve young</div>
        <div className="host__job-title">Copywritter, Social Chain</div>
        <div className="host__bio">Eve’s years as a social media executive and her personal love of social media give her an eye for platform shifts. As a social native, she is embedded in internet culture and can relay the nuances of ‘internet speak’ for brands while busting popular myths of youth marketing. A previous contributor at Voxburner and speaker for The Juice Academy and Chicks In Advertising, Eve has a knack for anticipating social updates and trends before they happen.</div>
      </div>
    </div>
    </section>
  </Layout>
)

export default AboutPage
