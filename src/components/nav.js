import React,{Component} from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes} from '@fortawesome/free-solid-svg-icons'

import "./nav.scss"

class Nav extends Component {

  constructor(props) {
    super(props);
    this.state = { showMenu: false };
    this.handleClick = this.handleClick.bind(this);
  }
  
handleClick(){
  this.setState({
    showMenu: !this.state.showMenu,
});
}

  render() {
    return(
      <div>
      <nav className={this.state.showMenu ? 'show' : 'hide'}>
      <ul>
      <li><Link to="/" activeClassName="active">Home</Link></li>
      <li><Link to="/episodes/" activeClassName="active">Episodes</Link></li>
      <li><Link to="/about/" activeClassName="active">About</Link></li>
      <li><Link to="/contact/" activeClassName="active">Contact</Link></li>
      </ul>
      <div className="close" onClick={this.handleClick}><FontAwesomeIcon icon={faTimes} size="1x" /></div>
      </nav>
      <div className="burger" onClick={this.handleClick}><FontAwesomeIcon icon={faBars} size="1x" /></div>
      </div>
    )
  }
}
export default Nav
