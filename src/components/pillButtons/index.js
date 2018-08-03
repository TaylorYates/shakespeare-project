import React from 'react';
import ReactDOM from 'react-dom';
import './pillButtons.css';

class PillButtons extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  componentDidMount() {

  }


  componentWillUnmount() {
    //
  }


  render() {
    return (
      <div className="pillButtons">
        <a href="#">All</a>
        <a href="#">Act 1</a>
        <a href="#">Act 2</a>
        <a href="#">Act 3</a>
        <a href="#">Act 4</a>
        <a href="#">Act 5</a>
      </div>
    )
  }
}

export default PillButtons;
