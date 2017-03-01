// src/components/App/index.js
import React, { Component } from 'react';
import './style.css';
import axios from 'axios'

class App extends Component {
  static propTypes = {}
  static defaultProps = {}
  state = {}

  handleClick = () => {
    axios.get('/user').then(res => console.log(res))
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.handleClick}>click</button>
      </div>
    );
  }
}

export default App;
