import React from 'react';
import ReactDOM from 'react-dom';
import './quotes.css';
import quotes from './henry_iv.json';

// class Quotes extends React.Component {
//   constructor(props) {
//     super(props);
//   }
//
//   componentDidMount() {

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

            // TODO
            // create an array of objects for all, act 1, act 2, etc DONE
            // utilise this array of objects to impliment line graphs (a component that will change the nested object being fed into it corrosponding with a data attribute on the button. Ie. if all is clicked, it renders the first object, etc, rather than having 6 components that do the same thing) => https://www.chartkick.com/react
            // components: graph, button, page title
            // write readme
            // write tests

      	    // document.getElementById('text').innerHTML = emotion.sadness * 100 + '%';
            // if (act < 2 && act > 0) {
            //   console.log(lineId, act, emotion.sadness * 100);
            // }
          }
        }));
      }

      Promise.all(requests).then(() => {
        console.log(parts);

        const data = [
          {name: "sadness", data: {}},
          {name: "anger", data: {}},
        ]

        for (const line of parts[0]) {
          data[0].data[line.line_number] = line.emotion.sadness * 100
          data[1].data[line.line_number] = line.emotion.anger * 100
        }

        console.log(data)

        // data = [
        //   {"name":"Sadness", "data": {"{quotes.act, quotes.line}": emotion * 100 + "%", "{quotes.act, quotes.line}": emotion * 100 + "%", ...}},
        //   {"name":"Angery", "data": {"{quotes.act, quotes.line}": emotion * 100 + "%", "{quotes.act, quotes.line}": emotion * 100 + "%", ...}},
        // ];
      })

//  }
//
//   componentWillUnmount() {
//
//   }
//
//   render() {
//     return (
//       <div>
//         // thing
//       </div>
//     )
//   }
//
// }
//
// // move this inside componentDidMount method
// // https://code.tutsplus.com/tutorials/fetching-data-in-your-react-application--cms-30670
//
// // console.log(quotes[0].text_entry)
