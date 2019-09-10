import React from 'react';
import * as d3 from 'd3';

function StockSymbol() {


  return (
    <div>
      <input type="text" id="stockSymbol" onkeyup="myFunction()" placeholder="Please input a stock symbol. . ." />
      <ul></ul>
    </div>
  )
}

function StockSymbolValue() {
  var stockSymbol = document.getElementById("stockSymbol").value;
  return stockSymbol;
}




export { StockSymbol, StockSymbolValue };
