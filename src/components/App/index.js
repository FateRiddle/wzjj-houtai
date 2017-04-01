// src/components/App/index.js
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './style.css'
import Header from '../Header.js'
import MainContent from '../MainContent/index'
import Login from '../Login.js'
import Sidebar from '../Sidebar'

class App extends Component {

  render() {
    return (this.props.login?
      <Router>
        <div>
          <Header />
          <div className="Body">
            <Route component={Sidebar} />
            <Route exact path="/" render={()=><div></div>} />
            <Route path="/:activity" render={() => <MainContent />} />
          </div>
        </div>
      </Router>

      :<Login />
    )
  }
}

const mapStateToProps = ({ login }) => ({ login })

App = connect(mapStateToProps)(App)

export default App
