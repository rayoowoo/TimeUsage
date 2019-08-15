import {COLORS} from './constants'

export default (data) => {
    const margin = 0;

    let width, height;

    const svg = d3.select("#watch")
        .classed("svg-container", true)
        .append("svg")
        .attr("width", function (d) { width = this.parentNode.clientWidth; return width })
        .attr("height", function (d) { height = this.parentNode.clientHeight; return height })
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    const radius = Math.min(width, height) / 2 - margin;

    const pie = d3.pie()
        .value(function (d) { return d.value; })

    const processed_data = d3.entries(data);

    processed_data.forEach(d => {
        d.percentage = d.value / 24;
    })
    
    const final_data = pie(processed_data);

    debugger

    svg
        .selectAll('whatever')
        .data(final_data)
        .enter()
        .append('path')
        .attr('d', d3.arc()
            .innerRadius(radius * 0.8)
            .outerRadius(radius)
        )
        .attr('fill', function(d) {return(COLORS[d.data.key])})
        .attr("stroke", "white")
        .style("stroke-width", "3px")
        // .style("opacity", 0.9)

    // window.onresize = document.location.reload;

    // https://stackoverflow.com/questions/16265123/resize-svg-when-window-is-resized-in-d3-js
    // for responsive SVG design
    // https://stackoverflow.com/questions/27762982/how-to-display-percentage-to-the-d3-js-piechart
    // for percentages
    // https://bl.ocks.org/farazshuja/e2cb52828c080ba85da5458e2304a61f
    // for labeling slices with percentages
}