import React, { Component } from 'react';
import './App.css';
import Quotes from './components/quotes'
import PillButtons from './components/pillButtons'
import Header from './components/header'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "dataAll"
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(dataType) {
    this.setState({ data: dataType })
  }


  render() {
    return (
      <div className="App">
        <div className="topContainer">
          <Header/>
          <PillButtons handleClick={this.handleClick} />
        </div>
        <Quotes dataType={this.state.data} />
      </div>
    );
  }
}

export default App;
