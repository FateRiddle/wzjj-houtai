import React from 'react'
import { connect } from 'react-redux'
import { getAllNews } from '../../redux/reducers'
import * as actions from '../../redux/actions'

class NewsEditor extends React.Component {

  handleDelete = (id) => {
    if(
      !this.dateDOM.value &&
      !this.titleDOM.value &&
      !this.contentDOM.value &&
      !this.urlDOM.value
    ){this.props.deleteNews(id)}
    else{
      this.props.openAlert('确定删除？',id)

    }
  }

  handleSave = (news) => {
    console.log(news)
    this.props.saveNews(news)
  }

  close = (msg,id) => {
    if(msg === '确定删除？'){
      this.props.deleteNews(id)
    }
    this.setState({hidden:true,msg:''})
  }

  popMsg = (msg,id) => {this.setState({hidden:false,msg,id})}

  render() {
    const {
      newsId,news,
      editNewsDate,editNewsTitle,editNewsUrl,editNewsContent,
    } = this.props
    const data = news.find(n => n.id === newsId) || {}
    const { date,title,url,content,id } = data
    return <div className="NewsEditor">
      <header>
        <input placeholder='日期，如2017-04-19'
          value={date} onChange={ e => editNewsDate(id,e.target.value)}
          ref={n => this.dateDOM = n}
        />
        <input className='titleInput' placeholder='标题'
          value={title} onChange={e => editNewsTitle(id,e.target.value)}
          ref={n => this.titleDOM = n}
        />
      </header>
      <input placeholder='链接，如http://www.baidu.com/' className="NewsEditor__url longInput"
        value={url} onChange={e=>editNewsUrl(id,e.target.value)}
        ref={n => this.urlDOM = n}
      />
      <input placeholder='内容' className="NewsEditor__content longInput"
        value={content} onChange={e=>editNewsContent(id,e.target.value)}
        ref={n => this.contentDOM = n}
      />
      <div className="NewsEditor__buttons">
        <button className='button deleteButton'
          onClick={()=>this.handleDelete(id)}
        >删除</button>
        <button className='button saveButton'
          onClick={()=>this.handleSave(data)}
        >保存</button>
      </div>
    </div>
  }
}

const mapStateToProps = (state) => ({ news:getAllNews(state) })

NewsEditor = connect(mapStateToProps,{...actions})(NewsEditor)

export default NewsEditor
