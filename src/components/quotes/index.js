import React from 'react';
import ReactDOM from 'react-dom';
import './quotes.css';
import quotes from './henry_iv.json';

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // data: dataAll
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
          let [act, verse, line] = lineNo.split(".");

          act = parseInt(act);

          quote.emotion = emotion;

          parts[0].push(quote);
          parts[act].push(quote);
        }
      }));
    }

    Promise.all(requests).then(() => {

      const dataAll = [
        {name: "sadness", data: {}},
        {name: "joy", data: {}},
        {name: "fear", data: {}},
        {name: "disgust", data: {}},
        {name: "anger", data: {}}
      ]

      for (const line of parts[0]) {
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

      console.log(dataAll)
      console.log(dataOne)
      console.log(dataTwo)
      console.log(dataThree)
      console.log(dataFour)
      console.log(dataFive)
    })
  }

  componentWillUnmount() {
    //
  }

  render() {
    return (
      <div>
        {this.state.data}
      </div>
    )
  }
}

export default Quotes;





///////////////
//   TODO    //
///////////////
// create an array of objects for all, act 1, act 2, etc DONE
// utilise this array of objects to impliment line graphs (a component that will change the nested object being fed into it corrosponding with a data attribute on the button. Ie. if all is clicked, it renders the first object, etc, rather than having 6 components that do the same thing) => https://www.chartkick.com/react
// components: graph, button, page title
// write readme
// write tests
// nice to have: a spinner while it loads
