import React from 'react'
import { connect } from 'react-redux'
import { getFilteredUsers,getFilteredLiangfangs,getIsFetchingUsers } from '../../redux/reducers'
import { editUserMemo } from '../../api/fetchData'
import * as actions from '../../redux/actions'
import { withRouter } from 'react-router'
import classNames from 'classnames'

const tableHead = ['','姓名','电话','房屋面积','报名时间','活动','备注']

class ContentTable extends React.Component {

  componentDidMount() {
    this.props.updateUser()
  }

  componentWillReceiveProps(nextProps) {
    if(this.props.location.pathname !== nextProps.location.pathname){
      console.log(nextProps.location.pathname)
    }
  }

  handleCheckClick = (id) => {
    this.props.toggleUser(id)
  }

  handleInputChange = (id,e) => {
    this.props.editUserMemo(id,e.target.value)
  }

  submitMemo = (id,e) => {
    if(e.key === 'Enter'){
      editUserMemo(id,e.target.value)
      window.focus()
      e.target.blur()
    }
  }

  render() {
    const { location:{ pathname },store } = this.props
    let users = getFilteredUsers(store)
    if(pathname === '/liangfang'){
      users = getFilteredLiangfangs(store)
    }

    if(getIsFetchingUsers(store)){
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
            {users.map((user,index) => (
              <tr key={index}>
                <td
                  className={classNames({
                    "completed":user.completed,
                  })}
                  onClick={()=>this.handleCheckClick(user.id)}
                />
                <td>{user.name}</td>
                <td>{user.phone}</td>
                <td>{`${user.address} 平米`}</td>
                <td>{user.createdAt.substring(0,10)}</td>
                <td>{user.huodong}</td>
                <td>
                  <input value={user.memo || ''}
                    placeholder={index === 0?'回车保存':''}
                    onChange={e =>this.handleInputChange(user.id,e)}
                    onKeyDown={e => this.submitMemo(user.id,e)}
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
