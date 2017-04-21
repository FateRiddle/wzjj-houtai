import React from 'react'
import { connect } from 'react-redux'
import { getIsFetchingNews,getAllNews } from '../../redux/reducers'
import * as actions from '../../redux/actions'
import { withRouter } from 'react-router'
import NewsEditor from './NewsEditor'
import Alert from '../Alert'
import Banner from '../Banner'

class NewsTable extends React.Component {

  componentDidMount() {
    this.props.updateNews()
  }

  render() {
    const { news,isFetching } = this.props
    console.log(news.length === 0, isFetching);

    if(isFetching){
      return (
        <div className='Table'>
          <div className='Table__nothing'>加载中...</div>
        </div>
      )
    }
    if(news.length === 0){
      return (
        <div className='Table'>
          <div className="Table__nothing">点“+”添加一条</div>
        </div>
      )
    }
    return <div className='Table'>
      <Alert />
      <Banner />
      {
        news.map(n => <NewsEditor key={n.id} newsId={n.id} />)
      }
    </div>
  }
}

NewsTable.propTypes = {

}

const mapStateToProps = store => ({
  news:getAllNews(store),
  isFetching:getIsFetchingNews(store)
})

NewsTable = withRouter(connect(mapStateToProps,{...actions})(NewsTable))

export default NewsTable
