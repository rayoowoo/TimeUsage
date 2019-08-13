var margin = 40;

let width, height;

var svg = d3.select("#watch")
    .classed("svg-container", true)
    .append("svg")
    .attr("width", function(d) { width = this.parentNode.clientWidth; return width})
    .attr("height", function(d) { height = this.parentNode.clientHeight; return height})
    .append("g")
    .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
var radius = Math.min(width, height) / 2 - margin;

var data = { a: 1, b: 20, c: 30, d: 8, e: 12 }


var pie = d3.pie()
    .value(function (d) { return d.value; })
var data_ready = pie(d3.entries(data))

svg
    .selectAll('whatever')
    .data(data_ready)
    .enter()
    .append('path')
    .attr('d', d3.arc()
        .innerRadius(radius* 0.8)    
        .outerRadius(radius)
    )
    .attr('fill', 'gray')
    .attr("stroke", "white")
    .style("stroke-width", "4px")
    .style("opacity", 0.9)

window.onresize = document.location.reload;

// https://stackoverflow.com/questions/16265123/resize-svg-when-window-is-resized-in-d3-js
// for responsive SVG design