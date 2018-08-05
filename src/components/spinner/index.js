import React from 'react';
import ReactDOM from 'react-dom';
import './spinner.css';

class Spinner extends React.Component {

  render() {
    return (
      <div>
        <div className="spinner">
        </div>
        <div className="spinnerText">
          <p>Loading...</p>
        </div>
      </div>
    )
  }
}

export default Spinner;
