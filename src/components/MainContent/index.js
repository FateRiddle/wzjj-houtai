import React from 'react'
import ContentTable from './ContentTable-huodong'
import ContentTableY from './ContentTable-yuyue'
import ContentHeader from './ContentHeader'
import { withRouter } from 'react-router'

class MainContent extends React.Component {

  render() {
    const { location:{ pathname } } = this.props
    return <div className="MainContent">
      <ContentHeader />
      {
        pathname === '/yuyue'?<ContentTableY />:
        (pathname === '/huodong' || pathname === '/liangfang')?<ContentTable />:
        <div className='NoMatch'></div>
      }
    </div>
  }
}

export default withRouter(MainContent)
