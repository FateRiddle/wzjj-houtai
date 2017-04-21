import React from 'react'
import SignupTable from './SignupTable'
import SignupToolbar from './SignupToolbar'

class SignupPage extends React.Component {

  render() {
    return <div className="MainContent">
      <SignupToolbar />
      <SignupTable />
    </div>
  }
}

export default SignupPage
