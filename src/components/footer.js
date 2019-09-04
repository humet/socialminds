import { Link } from "gatsby"
import React from "react"

import "./footer.scss"

const Footer = ({ noLogo}) => (
  <footer className="footer">
    <div className="wrapper footer__top">
    <div className="container">
    { !noLogo &&
              <Link
              to="/"
            >
              Social Minds
            </Link>
    }
    </div>
    </div>
    <div className="wrapper footer__bottom">
    <div className="container">
  © {new Date().getFullYear()}, Built with
  {` `}
  <a href="https://www.gatsbyjs.org">Gatsby</a>
  </div>
  </div>
</footer>
)
export default Footer