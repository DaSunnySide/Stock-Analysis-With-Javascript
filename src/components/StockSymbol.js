import React from "react";

//import * as d3 from 'd3'; Not being used atm

function StockSymbol() {
  return (
    <div>
      {/* Added a placeholder defualtValue for input to make debugging easy*/}
      <input
        type="text"
        id="stockSymbol"
        defaultValue="MSFT"
        onKeyUp="myFunction()"
        placeholder="Please input a stock symbol. . ."

      />
      <ul></ul>
    </div>
  );
}

function StockSymbolValue() {
  var stockSymbol = document.getElementById("stockSymbol").value;
  return stockSymbol;
}

export { StockSymbol, StockSymbolValue };
