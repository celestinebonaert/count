import React, { Component } from 'react';
import './App.css';
import CountComponent from './components/counterContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CountComponent/>
      </div>
    );
  }
}

export default App;
