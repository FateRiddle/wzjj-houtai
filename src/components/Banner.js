import React from 'react'
import { connect } from 'react-redux'

class Banner extends React.Component {

  render() {
    const { isSaving,saveSucess,bannerInfo } = this.props
    if(isSaving){
      return <div className="Banner Banner--saving">{bannerInfo}</div>
    } else if(saveSucess === 'success'){
      return <div className="Banner Banner--success">{bannerInfo}</div>
    } else if(saveSucess === 'failure'){
      return <div className="Banner Banner--failure">{bannerInfo}</div>
    }
    return null
  }
}

const mapStateToProps = ({ news,bannerInfo }) => ({
  isSaving:news.isSaving,
  saveSucess:news.saveSucess,
  bannerInfo,
})

Banner = connect(mapStateToProps)(Banner)

export default Banner
