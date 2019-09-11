import React from "react";
import { RadioBox, GetRadioVal } from "./RadioBox";
import { StockSymbol, StockSymbolValue } from "./StockSymbol";
import * as d3 from "d3";

function InputBox() {
  return (
    <div>
      <p>
        Input Box with Stock Symbol and Radio Buttons for function type. Submit
        button will add a new tab to graph that displays stock data with d3
      </p>
      <StockSymbol />
      <RadioBox />
      <button
        type="button"
        className="addGraph"
        onClick={() => PerformAPIQuery()}
      >
        Get the data
      </button>
    </div>
  );
}

function PerformAPIQuery() {
  var graphType = GetRadioVal();
  var stockSymbol = StockSymbolValue();
<<<<<<< HEAD
  var datatype = 'csv';
  var API_KEY = 'VW506K51LFXGUT1C';
  var API_QUERY = 'https://www.alphavantage.co/query?function=' + graphType + '&symbol=' + stockSymbol + '&' + 'apikey=' + API_KEY+'&' +datatype;
  var newData = {}
  var data = d3.json(API_QUERY).then(function(data) {
    
  })
  console.log(newData);


=======
  var API_KEY = "VW506K51LFXGUT1C";
  var API_QUERY =
    "https://www.alphavantage.co/query?function=" +
    graphType +
    "&symbol=" +
    stockSymbol +
    "&apikey=" +
    API_KEY; 
  //Default datatype is jSON so removed the csv datatype declaration and the datatype parameter
  //Fixed string concatination issue
  //console.log(typeof API_QUERY);
  //console.log(API_QUERY.length);
  fetch(API_QUERY)
    .then(function(result) {
      return result.json();
    })
    .then(function(json) {
      //console.log(json.length);
      displayResults(json);
    });

    /**
     * Started working on running through the keys and
     * breaking them up. They need to be filtered and mapped
     * then created in the DOM.
     */
  function displayResults(json) {
    console.log(json);
    for (var key in json) {
      if (json.hasOwnProperty(key)) {
        var val = json[key];
        console.log(val);
      }
    }
  }
  //map.forEach((value, key))
  /** 
  var data = d3.json(API_QUERY).then(function(data) {
    console.log(data.map);
  });*/
>>>>>>> 18ecdc83f28c104635285fe9242e217a23080529
}
export default InputBox;
