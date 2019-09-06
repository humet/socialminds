import { Link } from "gatsby"
import React from "react"
import Logo from '../images/Social_minds_logo.svg';
import FooterLogo from '../images/SocialChainLogo_FullWhite.svg';
import Podcast from "../components/podcastimg"

import "./footer.scss"

const Footer = ({ noLogo}) => (
 <footer className="footer">
    <div className="wrapper footer__top">
    <div className="container">
    <div className="footer-logo">
              <Link to="/" ><img alt="logo" src={Logo} width="160"/></Link>
            </div>
    <div className="podcast-img">
      <Podcast/>
    </div>
    </div>
    </div>
    <div className="wrapper footer__bottom">
    <div className="container">
    <div className="footer__bottom-link">
      <div className="footer__links">
      <Link to="/privacy/">Privacy Policy</Link>
  © Social Chain {new Date().getFullYear()}
  </div>
  </div>
  <div className="footer__bottom-logo">
  <a href="https://agency.socialchain.com" target="_blank" rel="noopener noreferrer"><img alt="logo" src={FooterLogo} width="85"/></a>
  </div>
  </div>
  </div>
</footer>
)

export default Footer