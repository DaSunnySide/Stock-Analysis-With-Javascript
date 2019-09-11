import React from 'react';
import { RadioBox, GetRadioVal } from './RadioBox'
import { StockSymbol, StockSymbolValue } from './StockSymbol'
import * as d3 from 'd3';

function InputBox() {
  return (
    <div>
    <p>Input Box with Stock Symbol and Radio Buttons for function type. Submit button will add a new tab to graph that displays stock data with d3</p>
    <StockSymbol />
    <RadioBox />
    <button type="button"
            className="addGraph"
            onClick={() => PerformAPIQuery()}>Get the data</button>
    </div>
  )
}

function PerformAPIQuery() {
  var graphType = GetRadioVal();
  var stockSymbol = StockSymbolValue();
  var datatype = 'csv';
  var API_KEY = 'VW506K51LFXGUT1C';
  var API_QUERY = 'https://www.alphavantage.co/query?function=' + graphType + '&symbol=' + stockSymbol + '&' + 'apikey=' + API_KEY+'&' +datatype;
  var newData = {}
  var data = d3.json(API_QUERY).then(function(data) {
    
  })
  console.log(newData);


}
export default InputBox;
