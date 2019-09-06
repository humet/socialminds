import React from "react"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter,  faLinkedin, faInstagram, faFacebook } from '@fortawesome/free-brands-svg-icons'

const Social = () => (
  <>
  <ul>
    <li><a href="https://twitter.com/TheSocialChain" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faTwitter} size="1x" /></a></li>
    <li><a href="https://www.linkedin.com/company/social-chain/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="1x" /></a></li>
    <li><a href="https://www.instagram.com/socialchain/?hl=en" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faInstagram} size="1x" /></a></li>
    <li><a href="https://www.facebook.com/groups/351364439135606/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faFacebook} size="1x" /></a></li>
    </ul>
    </>
)
export default Social