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
  var datatype = "csv";
  var API_KEY = "VW506K51LFXGUT1C";
  var API_QUERY =
    "https://www.alphavantage.co/query?function=" +
    graphType +
    "&symbol=" +
    stockSymbol +
    "&" +
    "apikey=" +
    API_KEY +
    "&" +
    datatype;
  const promise = fetch(API_QUERY);
  console.log(API_QUERY);
  promise
    .then(function(response) {
      const processPromise = response.json();
      // response.json().then(function(parsedJson) {
      //   console.log("This is the parsed json", parsedJson[1]);
      // });
      // console.log(typeof processPromise);
      return processPromise;
    })
    .then(function(processPromise) {
      // var keyValue =
      Object.keys(processPromise).forEach(function(key) {
        console.log(key + ": " + processPromise[key]);
        console.log("test");
      });
      // key.forEach(item => {
      //   console.log(item);
      // });
      // console.log("This is the parsed json", keyValue);
      console.log("This is the parsed json", processPromise);
    });
  // const processPromise = response.json();
  // console.log(processPromise);
  // return processPromise;
  // var data = d3.json(API_QUERY).then(function(data) {
  //   console.log(data.map);
  // });
}
export default InputBox;
