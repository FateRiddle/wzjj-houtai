// src/components/App/index.js
import { connect } from 'react-redux'
import React, { Component } from 'react'
import { BrowserRouter as Router, Route,Switch,Redirect } from 'react-router-dom'
import './style.css'
import Header from '../Header.js'
import MainContent from '../MainContent'
import SignupPage from '../SignupPage'
import Login from '../Login.js'
import Sidebar from '../Sidebar'

class App extends Component {

  render() {
    return (this.props.login?
      <Router>
        <div className="App">
          <Header />
          <div className="Body">
            <Route component={Sidebar} />
            <Switch>
              <Route path="/news" render={() => <MainContent />} />
              <Route path="/signup" render={() => <SignupPage />} />
              <Redirect to="/news"></Redirect>
            </Switch>
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
