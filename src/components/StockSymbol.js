import React from "react";
//import * as d3 from 'd3'; Commented this out as it is not being used
//fixed syntax error for line 9/10 as well
function StockSymbol() {
  return (
    <div>
      <input
        type="text"
        id="stockSymbol"
        onKeyUp="myFunction()"
        placeholder="Please input a stock symbol. . ."
        value="MSFT" //Put in a placeholder stock value
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
