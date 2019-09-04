import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from '../images/socialminds.svg';

import "./header.scss"

const Header = ({ siteTitle, noLogo, noSocial }) => (
  <header>
    <div className="wrapper">
    <div className="container">
      { !noLogo &&
                <Link
                to="/"
              >
                 <img alt={siteTitle} src={Logo} width="130px" />
              </Link>
      }
    <nav>
      <ul>
      <li></li><Link to="/">Home</Link>
      <li><Link to="/episodes/">Episodes</Link></li>
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/contact/">Contact</Link></li>
    </ul>
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
