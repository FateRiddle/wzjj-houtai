import React from 'react'

class UserTab extends React.Component {
  constructor(props) {
    super(props)
    this.state = { user:{userName:''} }
  }

  componentWillReceiveProps(nextProps) {
    this.state.user = nextProps
  }

  render() {
    const { user:{ userName } } = this.props
    return <div className="UserTab">
      {/* <img src="../static/avatar.png" alt="head"/> */}
      <div>{userName}</div>
      {/* <img src="../static/arrowDown.png" alt="drop"/> */}
    </div>
  }
}

UserTab.propTypes = {
  user: React.PropTypes.object,
}

export default UserTab
