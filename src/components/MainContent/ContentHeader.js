import React from 'react'
import Searchbar from './Searchbar'
import CompletedFilter from './CompletedFilter'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import { withRouter } from 'react-router'

class ContentHeader extends React.Component {

  handleClick = () => {
    switch (this.props.location.pathname) {
      case '/liangfang':
      case '/huodong':
        this.props.updateUser()
        break
      case '/yuyue':
        this.props.updateApp()
        break;
      default:
        return
    }
  }

  render() {
    return (
      <div className="ContentHeader">
        <button onClick={this.handleClick}>刷新信息</button>
        <Searchbar changeFilter={this.changeFilter}/>
        <CompletedFilter />
      </div>
    )
  }
}

ContentHeader = withRouter(connect(null,{
  ...actions
})(ContentHeader))

export default ContentHeader
