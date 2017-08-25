import React, { Component } from 'react';
import './App.css';
import Weather from './Weather'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-body">
          <Weather />
        </div>
      </div>
    );
  }
}

export default App;
