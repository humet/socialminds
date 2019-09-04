import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

import "./header.scss"

const Header = ({ siteTitle, noLogo, noSocial }) => (
  <header>
    <div className="wrapper">
    <div className="container">
      { !noLogo &&
                <Link
                to="/"
              >
                {siteTitle}
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
