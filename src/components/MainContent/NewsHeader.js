import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import { withRouter } from 'react-router'

class NewsHeader extends React.Component {

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
      <div className="NewsHeader">
        <button onClick={this.handleRefleshClick}>刷新信息</button>
        <button className='NewsHeader__addButton' onClick={this.handleAddClick}>+</button>
      </div>
    )
  }
}

NewsHeader = withRouter(connect(null,{
  ...actions
})(NewsHeader))

export default NewsHeader
