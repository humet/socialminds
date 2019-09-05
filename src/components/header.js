import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from '../images/Social_minds_logo.svg';
import Social from "../components/social"
import Nav from "../components/nav"

import "./header.scss"

const Header = ({ siteTitle, noLogo, noSocial }) => (
  <header>
    <div className="wrapper">
    <div className="container">
      { !noLogo &&
                <Link
                to="/"
              >
                 <img alt={siteTitle} src={Logo} width="110" />
              </Link>
      }
    <Nav/>
    { !noSocial &&
        <div className="social">
      <Social/>
        </div>
      }
    </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
  noLogo: PropTypes.bool,
  noSocial: PropTypes.bool
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
