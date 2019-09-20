import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import LogoWhite from "../images/Social_minds_logo_White.svg"
import HostTheo from "../images/team-theo.jpg"
import Hosteve from "../images/team-eve.jpg"
import HostOllie from "../images/team-ollie.jpg"

const AboutPage = () => (
  <Layout className="aboutpage about-hero-img">
    <div className="hero-text">
      <SEO title="About" />
      <h1>
        <img alt="logo" src={LogoWhite} width="512" />
      </h1>
      <p className="desktop">
        Social Minds is the UK’s first-ever dedicated social media marketing
        podcast, brought to you by Social Chain. Each week we’re joined by
        leaders - in all sectors - to learn the global impact social media is
        having on every corner of the business world. We translate the marketing
        jargon you hear every day, leave buzzwords at the door and speak to
        social media headlines in a way anyone can understand.
      </p>
    </div>
    <section className="about">
      <h2 className="desktop">Hosted by...</h2>
      <div className="host">
        <p className="mobile about-us-text">
          Social Minds is the UK’s first-ever dedicated social media marketing
          podcast, brought to you by Social Chain. Each week we’re joined by
          leaders - in all sectors - to learn the global impact social media is
          having on every corner of the business world. We translate the
          marketing jargon you hear every day, leave buzzwords at the door and
          speak to social media headlines in a way anyone can understand.
        </p>
        <h2 className="mobile">Hosted by...</h2>
        <div className="host__block">
          <div className="host__img">
            <img alt="Theo" src={HostTheo} width="150" />
          </div>
          <div className="host__name">Theo Watt</div>
          <div className="host__job-title">
            <a
              href="https://www.linkedin.com/in/theo-watt-41293047/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Senior Copywriter, Social Chain
            </a>
          </div>
          <div className="host__bio">
            Theo’s background in journalism and analytical view of the landscape
            means he can contextualise trending topics with an investigative
            edge. With a lifelong passion for advertising, he has a deep
            understanding of brand activity, both past and present. Having
            worked for international broadcasters Viacom and MTV UK and now
            writing for accounts such as Superdry and Nokia, he is skilled in
            knowing what sells on social.
          </div>
        </div>
        <div className="host__block">
          <div className="host__img">
            <img alt="Eve" src={Hosteve} width="150" />
          </div>
          <div className="host__name">Eve Young</div>
          <div className="host__job-title">
            <a
              href="https://www.linkedin.com/in/eve-young/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Copywriter, Social Chain
            </a>
          </div>
          <div className="host__bio">
            Eve’s years as a social media executive and her personal love of
            social media give her an eye for platform shifts. As a social
            native, she is embedded in internet culture and can relay the
            nuances of ‘internet speak’ for brands while busting popular myths
            of youth marketing. A previous contributor at Voxburner and speaker
            for The Juice Academy and Chicks In Advertising, Eve has a knack for
            anticipating social updates and trends before they happen.
          </div>
        </div>
      </div>
      <div className="host">
        <h2 style={{ width: `100%`, margin: `15px 0 35px` }}>Produced by...</h2>
        <div className="host__block">
          <div className="host__img">
            <img alt="Ollie Thomson" src={HostOllie} width="150" />
          </div>
          <div className="host__name">Ollie Thomson</div>
          <div className="host__job-title">
            <a
              href="https://www.linkedin.com/in/ollie-thomson-99b300a8/"
              rel="noopener noreferrer"
              target="_blank"
            >
              Copywriter, Social Chain
            </a>
          </div>
          <div className="host__bio">
            Ollie’s knowledge of audio stems from his professional training in
            music but he now specialises in creative videography, sound design
            and audiovisual editing and design. Ollie has a strong attention to
            detail and can use his instinct for anticipating behaviour to
            perfect the user experience across multiple platforms. With a keen
            eye and ear for composition, Ollie is well versed in sensory design
            and has learned how to apply that effectively to social media
            channels.
          </div>
        </div>
      </div>
    </section>
  </Layout>
)

export default AboutPage
