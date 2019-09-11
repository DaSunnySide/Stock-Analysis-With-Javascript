import React from "react";
//import PerformAPIQuery from './InputBox.js'; Commented it out as its not being used at the momment
//import * as d3 from 'd3';

function Graph() {
  return <div id="Graph" onLoad="loadData()"></div>;
}

/* Commenting this out as we do not use them at the momemnt
  function loadData() {
    d3.text('../testStockData.csv', function(data) {
    var parsedCSV = d3.csv.parseRows(data);

    var container = d3.select("body")
      .append("table")

      .selectAll("tr")
        .data(parsedCSV).enter()
        .append("tr")

      .selectAll("td")
        .data(function(d) { return d; }).enter()
        .append("td")
        .text(function(d) { return d; });
})
}*/

export default Graph;
