import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import { withRouter } from 'react-router'

class NewsToolbar extends React.Component {

  handleRefleshClick = () => {
    if(this.props.location.pathname === '/news') {
      this.props.updateNews()
    }
  }

  handleAddClick = () => {
    if(this.props.location.pathname === '/news') {
      this.props.addNews()
    }
  }

  render() {
    return (
      <div className="Toolbar">
        <button onClick={this.handleRefleshClick}>刷新信息</button>
        <button className='Toolbar__addButton' onClick={this.handleAddClick}>+</button>
      </div>
    )
  }
}

NewsToolbar = withRouter(connect(null,{
  ...actions
})(NewsToolbar))

export default NewsToolbar
