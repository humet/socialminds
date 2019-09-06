import { Link } from "gatsby"
import React from "react"

import "./nav.scss"

const Nav = ({ }) => (
    <nav>
      <ul>
      <li><Link to="/" activeClassName="active">Home</Link></li>
      <li><Link to="/episodes/" activeClassName="active">Episodes</Link></li>
      <li><Link to="/about/" activeClassName="active">About</Link></li>
      <li><Link to="/contact/" activeClassName="active">Contact</Link></li>
      </ul>
    </nav>
)

export default Nav
