import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from '../images/Social_minds_logo.svg';

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
    <nav>
      <Link to="/">Home</Link>
      <Link to="/episodes/">Episodes</Link>
      <Link to="/about/">About</Link>
      <Link to="/contact/">Contact</Link>
    </nav>
    { !noSocial &&
        <>social links</>
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
