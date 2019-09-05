import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import Logo from '../images/Social_minds_logo.svg';
import Social from "../components/social"
import Nav from "../components/nav"

import "./header.scss"

const Header = ({ siteTitle }) => (
  <header>
    <div className="wrapper">
    <div className="container">
    <div className="nav-logo"><Link to="/"><img alt={siteTitle} src={Logo} width="110" /></Link></div>
    <Nav/>
    <div className="social"><Social/></div>
    </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
