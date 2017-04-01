import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import * as actions from '../redux/actions'

class Sidebar extends React.Component {

  handleLinkClick = pathname => {
    const { changeFilter,changeCompleted } = this.props
    //重置
    changeFilter('')
    changeCompleted('all')
  }

  render() {
    return <ul className='Sidebar'>
      <li><NavLink to='/liangfang' onClick={()=> this.handleLinkClick('/liangfang')}>量房</NavLink></li>
      <li><NavLink to='/yuyue' onClick={()=> this.handleLinkClick('/yuyue')}>预约</NavLink></li>
      <li><NavLink to='/huodong' onClick={()=> this.handleLinkClick('/huodong')}>活动</NavLink></li>
    </ul>
  }
}

Sidebar = connect(null,{ ...actions })(Sidebar)

export default Sidebar
