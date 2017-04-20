import React from 'react'
import { connect } from 'react-redux'

class Banner extends React.Component {

  render() {
    const { isSaving,saveSucess } = this.props
    if(isSaving){
      return <div className="Banner Banner--saving">处理中...</div>
    } else if(saveSucess){
      return <div className="Banner Banner--saved">保存成功！</div>
    }
    return null
  }
}

const mapStateToProps = ({ news }) => ({
  isSaving:news.isSaving,
  saveSucess:news.saveSucess,
})

Banner = connect(mapStateToProps)(Banner)

export default Banner
