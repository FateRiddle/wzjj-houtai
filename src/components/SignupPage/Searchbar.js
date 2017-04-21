import React from 'react'
import { connect } from 'react-redux'
import { changeFilter } from '../../redux/actions'

class Searchbar extends React.Component {

  handleKeyDown = e => {
    if(e.key === 'Enter'){
      this.props.changeFilter(e.target.value)
      e.target.value = ''
    }
  }

  render() {
    return <div className='Searchbar'>
      <input placeholder="搜索"
        ref={node=>this.input=node}
        onKeyDown={e => this.handleKeyDown(e)}
      />
    </div>
  }
}

Searchbar.propTypes = {

}

const mapStateToProps = ({ users }) => ({ users })

Searchbar = connect(mapStateToProps,{ changeFilter })(Searchbar)

export default Searchbar
