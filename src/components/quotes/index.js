import React from 'react';
import './quotes.css';
import quotes from './henry_iv.json';
import ReactChartkick, { LineChart } from 'react-chartkick'
import Chart from 'chart.js'
import Spinner from '../spinner'

ReactChartkick.addAdapter(Chart)

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataAll: [],
      dataOne: [],
      dataTwo: [],
      dataThree: [],
      dataFour: [],
      dataFive: [],
      loaded: false
    }
  }

  componentDidMount() {

    // if the line number isn't empty
    const filteredQuotes = quotes.filter((quote) => quote.line_number);
    const requests = [];
    const parts = [[], [], [], [], [], []];

    // loop through the quotes
    for (const quote of filteredQuotes) {
      const lineId = quote.line_id
      const lineNo = quote.line_number
      const url = 'https://henryiv.biarrinetworks.com/lines/'

      // fetch it's corrolating json
      requests.push(fetch(url + lineId)
      .then(function(response) {
        return response.json();
      })

      .then(function(myJson) {

        // if it's corrolating json has an emotion property
        if (myJson.emotion) {
          const emotion = myJson.emotion.emotion.document.emotion;
          //break up the line number
          let [act] = lineNo.split(".");

          // turn the first part ie. act into a number from a string
          act = parseInt(act, 10);

          // redefining emotion for this purpose
          quote.emotion = emotion;

          // push these into arrays of their corrosponding act
          parts[0].push(quote);
          parts[act].push(quote);
        }
      }));
    }

    Promise.all(requests).then(() => {
      // create data specific arrays to suit the line chart's required format

      const dataAll = [
        // this is for the format required by the line chart
        {name: "sadness", data: {}},
        {name: "joy", data: {}},
        {name: "fear", data: {}},
        {name: "disgust", data: {}},
        {name: "anger", data: {}}
      ]

      for (const line of parts[0]) {
        //get the dataAll array position x, insert into data the line number assigned to the emotional score, rounded to the nearest number and multiplied by 100 to create a number out of 100
        dataAll[0].data[line.line_number] = parseFloat(Math.round(line.emotion.sadness * 100));
        dataAll[1].data[line.line_number] = parseFloat(Math.round(line.emotion.joy * 100));
        dataAll[2].data[line.line_number] = parseFloat(Math.round(line.emotion.fear * 100));
        dataAll[3].data[line.line_number] = parseFloat(Math.round(line.emotion.disgust * 100));
        dataAll[4].data[line.line_number] = parseFloat(Math.round(line.emotion.anger * 100));
      }

      const dataOne = [
        {name: "sadness", data: {}},
        {name: "joy", data: {}},
        {name: "fear", data: {}},
        {name: "disgust", data: {}},
        {name: "anger", data: {}}
      ]

      for (const line of parts[1]) {
        dataOne[0].data[line.line_number] = parseFloat(Math.round(line.emotion.sadness * 100));
        dataOne[1].data[line.line_number] = parseFloat(Math.round(line.emotion.joy * 100));
        dataOne[2].data[line.line_number] = parseFloat(Math.round(line.emotion.fear * 100));
        dataOne[3].data[line.line_number] = parseFloat(Math.round(line.emotion.disgust * 100));
        dataOne[4].data[line.line_number] = parseFloat(Math.round(line.emotion.anger * 100));
      }

      const dataTwo = [
        {name: "sadness", data: {}},
        {name: "joy", data: {}},
        {name: "fear", data: {}},
        {name: "disgust", data: {}},
        {name: "anger", data: {}}
      ]

      for (const line of parts[2]) {
        dataTwo[0].data[line.line_number] = parseFloat(Math.round(line.emotion.sadness * 100));
        dataTwo[1].data[line.line_number] = parseFloat(Math.round(line.emotion.joy * 100));
        dataTwo[2].data[line.line_number] = parseFloat(Math.round(line.emotion.fear * 100));
        dataTwo[3].data[line.line_number] = parseFloat(Math.round(line.emotion.disgust * 100));
        dataTwo[4].data[line.line_number] = parseFloat(Math.round(line.emotion.anger * 100));
      }

      const dataThree = [
        {name: "sadness", data: {}},
        {name: "joy", data: {}},
        {name: "fear", data: {}},
        {name: "disgust", data: {}},
        {name: "anger", data: {}}
      ]

      for (const line of parts[3]) {
        dataThree[0].data[line.line_number] = parseFloat(Math.round(line.emotion.sadness * 100));
        dataThree[1].data[line.line_number] = parseFloat(Math.round(line.emotion.joy * 100));
        dataThree[2].data[line.line_number] = parseFloat(Math.round(line.emotion.fear * 100));
        dataThree[3].data[line.line_number] = parseFloat(Math.round(line.emotion.disgust * 100));
        dataThree[4].data[line.line_number] = parseFloat(Math.round(line.emotion.anger * 100));
      }

      const dataFour = [
        {name: "sadness", data: {}},
        {name: "joy", data: {}},
        {name: "fear", data: {}},
        {name: "disgust", data: {}},
        {name: "anger", data: {}}
      ]

      for (const line of parts[4]) {
        dataFour[0].data[line.line_number] = parseFloat(Math.round(line.emotion.sadness * 100));
        dataFour[1].data[line.line_number] = parseFloat(Math.round(line.emotion.joy * 100));
        dataFour[2].data[line.line_number] = parseFloat(Math.round(line.emotion.fear * 100));
        dataFour[3].data[line.line_number] = parseFloat(Math.round(line.emotion.disgust * 100));
        dataFour[4].data[line.line_number] = parseFloat(Math.round(line.emotion.anger * 100));
      }

      const dataFive = [
        {name: "sadness", data: {}},
        {name: "joy", data: {}},
        {name: "fear", data: {}},
        {name: "disgust", data: {}},
        {name: "anger", data: {}}
      ]

      for (const line of parts[5]) {
        dataFive[0].data[line.line_number] = parseFloat(Math.round(line.emotion.sadness * 100));
        dataFive[1].data[line.line_number] = parseFloat(Math.round(line.emotion.joy * 100));
        dataFive[2].data[line.line_number] = parseFloat(Math.round(line.emotion.fear * 100));
        dataFive[3].data[line.line_number] = parseFloat(Math.round(line.emotion.disgust * 100));
        dataFive[4].data[line.line_number] = parseFloat(Math.round(line.emotion.anger * 100));
      }

      // Set this as the state
      this.setState({
        dataAll,
        dataOne,
        dataTwo,
        dataThree,
        dataFour,
        dataFive,
        loaded: true
      })
    })
  }

  render() {
    return (
      <div className="quotes">
        <div className="linechart-container">
          {this.state.loaded ?
            <React.Fragment>
              <div className="x-title">Emotion percentage</div>
              <div class="y-title">Act, scene, line</div>
              <LineChart data={this.state[this.props.dataType]} colors={["#2E64C8", "#009727", "#FF992B", "#9D0096", "#E23822"]} suffix="%" width="80%" height="600px" legend="right" />
            </React.Fragment>
            : <Spinner/>}
        </div>
        <div className="disclaimer">
          {this.state.loaded ?
              <p>*Please note, the acts/scenes/lines are not rendered in order due to time constraints.</p>
            : ""}
        </div>
      </div>
    )
  }
}

export default Quotes;
