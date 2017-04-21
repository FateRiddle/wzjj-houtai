import React from 'react'
import NewsTable from './NewsTable'
import NewsToolbar from './NewsToolbar'

class MainContent extends React.Component {

  render() {
    return <div className="MainContent">
      <NewsToolbar />
      <NewsTable />
    </div>
  }
}

export default MainContent
