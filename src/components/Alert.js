import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../redux/actions'

class Alert extends React.Component {

  closeWithComfirm = () => {
    const { alert,closeAlert,deleteNews } = this.props
    const { currentId:id } = alert
    deleteNews(id)
    closeAlert()
  }

  close = () => {
    this.props.closeAlert()
  }

  render(){
    const { hidden,msg } = this.props.alert
    return (!hidden &&
      <div className="Alert">
        {msg}
        <button className="Alert__okButton" onClick={this.closeWithComfirm}>确定</button>
        <button className="Alert__cancelButton" onClick={this.close}>取消</button>
      </div>
    )
  }
}

const mapStateToProps = ({ alert }) => ({ alert })

Alert = connect(mapStateToProps,{...actions})(Alert)

export default Alert
