import React from 'react'
import Searchbar from './Searchbar'
import CompletedFilter from './CompletedFilter'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import { withRouter } from 'react-router'

class SignupToolbar extends React.Component {

  handleClick = () => {
    this.props.updateMembers()
  }

  render() {
    return (
      <div className="Toolbar">
        <button onClick={this.handleClick}>刷新信息</button>
        <Searchbar changeFilter={this.changeFilter}/>
        <CompletedFilter />
      </div>
    )
  }
}

SignupToolbar = withRouter(connect(null,{
  ...actions
})(SignupToolbar))

export default SignupToolbar
