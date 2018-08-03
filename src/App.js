import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Quotes from './components/quotes'
import PillButtons from './components/pillButtons'


class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Shakespeare project</h1>
        <Quotes />
        <PillButtons/>
      </div>
    );
  }
}

export default App;
