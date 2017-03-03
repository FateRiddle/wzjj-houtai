import React from 'react'
import ContentTable from './ContentTable'
import ContentHeader from './ContentHeader'

class MainContent extends React.Component {

  render() {
    return <div className="MainContent">
      <ContentHeader />
      <ContentTable />
    </div>
  }
}

export default MainContent
