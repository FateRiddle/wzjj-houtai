import React from 'react'
import Searchbar from './Searchbar'
import { connect } from 'react-redux'
import { fetchData } from '../../api/fetchData'
import { updateUser } from '../../redux/actions/index'
import axios from 'axios'

class ContentHeader extends React.Component {

  handleClick = () => {
    fetchData().then(data => {
      console.log(data)
      this.props.updateUser(data)
    })
  }

  render() {
    return (
      <div className="ContentHeader">
        <button onClick={this.handleClick}>刷新信息</button>
        <Searchbar changeFilter={this.changeFilter}/>
      </div>
    )
  }
}

ContentHeader = connect(null,{ updateUser })(ContentHeader)

export default ContentHeader
