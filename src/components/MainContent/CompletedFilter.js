import React from 'react'
import { connect } from 'react-redux'
import { changeCompleted } from '../../redux/actions'
import downArrowUrl from '../../static/downArrow.png'

class CompletedFilter extends React.Component {

  state = { menuHidden: true }

  textToRender = filter => {
    switch (filter) {
      case 'all':
        return '全部'
      case 'active':
        return '待处理'
      case 'completed':
        return '已处理'
      default:
        return '全部'
    }
  }

  toggleMenu = () => {
    this.setState({menuHidden:!this.state.menuHidden})
  }

  handleClick = filter => {
    this.props.changeCompleted(filter)
    this.toggleMenu()
  }

  render() {
    return (
      <div className='CompletedFilter'>
        <header onClick={this.toggleMenu}>
          {this.textToRender(this.props.completed)}
          <img src={downArrowUrl} alt=""/>
        </header>
        {
          !this.state.menuHidden &&
          (
            <section>
              <div onClick={()=>this.handleClick('all')}>全部</div>
              <div onClick={()=>this.handleClick('active')}>待处理</div>
              <div onClick={()=>this.handleClick('completed')}>已处理</div>
            </section>
          )
        }
        </div>
    )
  }
}

const mapStateToProps = ({ completed }) => ({ completed })

CompletedFilter = connect(mapStateToProps,{ changeCompleted })(CompletedFilter)

export default CompletedFilter
