// src/components/App/index.js
import { connect } from 'react-redux'
import React, { Component } from 'react';
import './style.css';
// import axios from 'axios'
import Header from '../Header.js'
import MainContent from '../MainContent/index'
import Login from '../Login.js'

class App extends Component {

  // handleClick = () => {
  //   axios.get('/user').then(res => console.log(res))
  // }

  render() {
    return (this.props.login?
      <div>
        <Header />
        <div className="Body">
          {/* <Sidebar activeTab="客户信息"/> */}
          <MainContent />
        </div>
      </div>:
      <Login />
    )
  }
}

const mapStateToProps = ({ login }) => ({ login })

App = connect(mapStateToProps)(App)

export default App
