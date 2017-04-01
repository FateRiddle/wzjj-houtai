import React from 'react'
import { connect } from 'react-redux'
import { toggleLogin } from '../redux/actions'
import { Link } from 'react-router-dom'

class Header extends React.Component {

  handleClick = () => {
    //maybe a popup to confirm

    this.props.toggleLogin()
  }

  render() {
    return <div className="Header">
      <img src={require("../static/logo.png")} alt="e键美家"/>
      <Link to="/"><button onClick={this.handleClick}>登出</button></Link>
    </div>
  }
}

Header = connect(null,{toggleLogin})(Header)

export default Header
