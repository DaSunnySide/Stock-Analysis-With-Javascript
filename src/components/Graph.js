import React from "react";
 master


import * as d3 from "d3";
//import PerformAPIQuery from './InputBox.js'; Commented it out as its not being used at the momment
//import * as d3 from 'd3';

var chart = {
  const svg = d3.select(DOM.svg(width, height));

  svg.append("g")
    .call(xAxis);

  svg.append("g")
    .call(yAxis);

  svg.append("path")
    .datum(data)
    .attr("fill", "none")
    .attr("stroke", "steelblue")
    .attr("stroke-width", 1.5)
    .attr("stroke-linejoin", "round")
    .attr("stroke-linecap", "round")
    .attr("d", line);

  return svg.node();
master

  x = g => g
    .attr("transform", 'translate(0, ${height - margin.bottom})')
    .call(d3.axisBottom(x).ticks(width / 80).tickSizeOuter(0))
    .call(g => g.select("domain").remove())

    yAxis = g => g
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisleft(y))
        .tickValues(d3.ticks(...y.domain()))
        .tickFormat(format)
      .call(g => g.selectAll(".tick line").clone()
        .attr("stroke-opacity", d => d === 1 ? null : 0.2)
        .attr("x2", width - margin.left - margin.right))
      .call(g => g.select(".domain").remove())

    parseDate = d3.timeParse("%Y-%m-%d")
}
export default Graph;
