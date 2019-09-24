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
  try {
    promise
      .then(function(response) {
        const processPromise = response.json();
        return processPromise;
      })
      .then(function(processPromise) {
        Object.keys(processPromise).forEach(function(key) {
          var currentKey = processPromise[key];
          typeof currentKey === "object"
            ? getProperties(currentKey, key)
            : console.log("false");
          // console.log(key + ": " + processPromise[key]);
          // console.log(typeof processPromise[key]);
          // console.log(processPromise[key]);
        });
      });
  } catch (e) {
    console.error(e);
  }
  /*
   * Function runs if objects has properties and
   * loops through them and console's each one out with
   * its key value.
   */
  function getProperties(currentKey, upperKey) {
    Object.keys(currentKey).forEach(function(key) {
      if (currentKey.hasOwnProperty(key)) {
        if (typeof key === "string") {
          console.log(key, " : ", currentKey[key]); //currentKey is an
        }

        if (upperKey == "Time Series (Daily)") {
          var secondLayer = currentKey[key];
          if (Object.keys(secondLayer)) {
            Object.keys(secondLayer).forEach(item => {
              console.log(item, " : ", secondLayer[item]);
            });
          }
        }
      } else {
        console.log(key, " : ", currentKey[key]);
      }
    });
  }

  // return processPromise;
  // var data = d3.json(API_QUERY).then(function(data) {
  //   console.log(data.map);
  // });
}
export default InputBox;
