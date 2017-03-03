import React from 'react'

class Sidebar extends React.Component {
  constructor(props) {
    super(props)
    this.state = { activeTab:'' }
  }

  render() {
    return <ul className='Sidebar'>
      <li>活动内容</li>
      <li>客户信息</li>
    </ul>
  }
}

export default Sidebar
