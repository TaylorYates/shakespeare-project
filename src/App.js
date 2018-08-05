import React, { Component } from 'react';
import './App.css';
import Quotes from './components/quotes'
import PillButtons from './components/pillButtons'
import Header from './components/header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="topContainer">
          <Header/>
          <PillButtons/>
        </div>
        <Quotes />
      </div>
    );
  }
}

export default App;
