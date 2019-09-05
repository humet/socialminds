import { Link } from "gatsby"
import React from "react"
import Logo from '../images/Social_minds_logo.svg';
import FooterLogo from '../images/SocialChainLogo_FullWhite.svg';

import "./footer.scss"

const Footer = ({ noLogo}) => (
 <footer className="footer">
    <div className="wrapper footer__top">
    <div className="container">
    { !noLogo &&
    <div className="footer-logo">
              <Link
              to="/"
            >
                 <img alt="logo" src={Logo} width="160"/>
            </Link>
            </div>
    }
    </div>
    </div>
    <div className="wrapper footer__bottom">
    <div className="container">
      <div>
  © {new Date().getFullYear()}, Built with
  {` `}
  <a href="https://www.gatsbyjs.org">Gatsby</a>
  </div>
  <div className="footer-bottom-logo">
  <img alt="logo" src={FooterLogo} width="85"/>
  </div>
  </div>
  </div>
</footer>
)

export default Footer