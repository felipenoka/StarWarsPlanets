import React, { Component } from 'react';
import Planet from './components/Planet'
import logo from './assets/logo.png'
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <header><img src={logo} alt="Star Wars Planets"></img></header>
        <Planet />
      </div>
    )
  }
}

export default App;
