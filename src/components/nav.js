import { Link } from "gatsby"
import React from "react"

import "./nav.scss"

const Nav = ({ }) => (
    <nav>
      <ul>
      <li><Link to="/">Home</Link></li>
      <li><Link to="/episodes/">Episodes</Link></li>
      <li><Link to="/about/">About</Link></li>
      <li><Link to="/contact/">Contact</Link></li>
      </ul>
    </nav>
)

export default Nav
