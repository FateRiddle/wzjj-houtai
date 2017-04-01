import React from 'react'
import { connect } from 'react-redux'
import { getFilteredAppointments,getIsFetchingApps } from '../../redux/reducers/index'
import { editAppMemo } from '../../api/fetchData'
import * as actions from '../../redux/actions'
import { withRouter } from 'react-router'
import classNames from 'classnames'

const tableHead = ['','姓名','电话','包','款','价格','报名时间','备注']

class ContentTable extends React.Component {

  componentDidMount() {
    this.props.updateApp()
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps.location.pathname)
  }

  handleCheckClick = (id) => {
    this.props.toggleApp(id)
  }

  handleInputChange = (id,e) => {
    this.props.editAppMemo(id,e.target.value)
  }

  submitMemo = (id,e) => {
    if(e.key === 'Enter'){
      editAppMemo(id,e.target.value)
      window.focus()
      e.target.blur()
    }
  }

  render() {
    const { store } = this.props
    const apps = getFilteredAppointments(store)
    if(getIsFetchingApps(store)){
      return <div className='LoadingScreen'>加载中~</div>
    }

    return <div className='ContentTable'>
      <ul className="TableHeader">
        {tableHead.map((name,index) =>
          <li key={index}>{name}</li>
        )}
      </ul>
      <div className='ScrollWrapper'>
        <table>
          <tbody>
            {apps.map((app,index) => (
              <tr key={index}>
                <td
                  className={classNames({
                    "completed":app.completed,
                  })}
                  onClick={()=>this.handleCheckClick(app.id)}
                />
                <td>{app.name}</td>
                <td>{app.phone}</td>
                <td>{app.bao}</td>
                <td>{app.kuan}</td>
                <td>{app.price}</td>
                <td>{app.createdAt.substring(0,10)}</td>
                <td>
                  <input value={app.memo || ''}
                    placeholder={index === 0?'回车保存':''}
                    onChange={e => this.handleInputChange(app.id,e)}
                    onKeyDown={e => this.submitMemo(app.id,e)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  }
}

ContentTable.propTypes = {

}

const mapStateToProps = store => ({store})

ContentTable = withRouter(connect(mapStateToProps,{...actions})(ContentTable))

export default ContentTable
