import React from 'react'
import { connect } from 'react-redux'
import { getFilteredMembers,getIsFetchingMembers } from '../../redux/reducers'
import * as actions from '../../redux/actions'
import { withRouter } from 'react-router'

const tableHead = ['','姓名','电话','城市','房屋面积','报名时间','活动','备注']

class ContentTable extends React.Component {

  componentDidMount() {
    this.props.updateMembers()
  }

  handleCheckClick = (id) => {
    this.props.toggleMember(id)
  }

  handleInputChange = (id,e) => {
    this.props.editMemo(id,e.target.value)
  }

  handleMemo = (id,e) => {
    if(e.key === 'Enter'){
      this.props.saveMemo(id,e.target.value)
      window.focus()
      e.target.blur()
    }
  }

  render() {
    const { isFetching,members } = this.props

    if(isFetching){
      return <div className='Table__nothing'>加载中...</div>
    }
    return <div className='SignupTable Table'>
      <ul className="SignupTable__Header">
        {tableHead.map((name,index) =>
          <li key={index}>{name}</li>
        )}
      </ul>
      <div className='SignupTable__scrollWrapper'>
        <table>
          <tbody>
            {members.map((member,index) => (
              <tr key={index} className='SignupTable__row'>
                <td
                  className={member.completed?'SignupTable__check completed':'SignupTable__check'}
                  onClick={()=>this.handleCheckClick(member.id)}
                />
                <td>{member.name}</td>
                <td>{member.phone}</td>
                <td>{member.city}</td>
                <td>{`${member.area} 平米`}</td>
                <td>{member.createdAt.substring(0,10)}</td>
                <td>{member.huodong}</td>
                <td>
                  <input className='memoInput' value={member.memo || ''}
                    placeholder={index === 0?'回车保存':''}
                    onChange={e =>this.handleInputChange(member.id,e)}
                    onKeyDown={e => this.handleMemo(member.id,e)}
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

const mapStateToProps = store => ({
  members: getFilteredMembers(store),
  isFetching: getIsFetchingMembers(store),
})

ContentTable = withRouter(connect(mapStateToProps,{...actions})(ContentTable))

export default ContentTable
