import React from 'react';
import './pillButtons.css';

class PillButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div className="pillButtons">
        <button onClick={() => this.props.handleClick("dataAll")}>All</button>
        <button onClick={() => this.props.handleClick("dataOne")}>Act 1</button>
        <button onClick={() => this.props.handleClick("dataTwo")}>Act 2</button>
        <button onClick={() => this.props.handleClick("dataThree")}>Act 3</button>
        <button onClick={() => this.props.handleClick("dataFour")}>Act 4</button>
        <button onClick={() => this.props.handleClick("dataFive")}>Act 5</button>
      </div>
    )
  }
}

export default PillButtons;
