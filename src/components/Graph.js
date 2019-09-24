import React from "react";
//import PerformAPIQuery from './InputBox.js'; Not being used
import * as d3 from "d3";

function Graph() {
  return <div id="Graph" onLoad="loadData()"></div>;
}

function loadData() {
  d3.text("../testStockData.csv", function(data) {
    var parsedCSV = d3.csv.parseRows(data);

    var container = d3
      .select("body")
      .append("table")

      .selectAll("tr")
      .data(parsedCSV)
      .enter()
      .append("tr")

      .selectAll("td")
      .data(function(d) {
        return d;
      })
      .enter()
      .append("td")
      .text(function(d) {
        return d;
      });
  });
}

export default Graph;
