import React from 'react'
import NewsTable from './NewsTable'
import NewsHeader from './NewsHeader'

class MainContent extends React.Component {

  render() {
    return <div className="MainContent">
      <NewsHeader />
      <NewsTable />
    </div>
  }
}

export default MainContent
