import {alpha, COLORS} from '../helpers/constants'
import Utils from '../helpers/utils'

export default (data) => {
    const margin = 15;

    let width, height;
    const utils = new Utils();

    const svg = d3.select("#watch")
        .classed("svg-container", true)
        .append("svg")
        .attr("width", function (d) { width = this.parentNode.clientWidth; return width })
        .attr("height", function (d) { height = this.parentNode.clientHeight; return height })
        .append("g")
        .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");
    const radius = Math.min(width, height) / 2 - margin;

    // setting the parameters of the pie
    const pie = d3.pie()
        .value(function (d) { return d.value; })

    // formatting the data object received into an array of POJOS with the keys "key" and "value" and values correspondingly. 
    const processed_data = d3.entries(data);

    // total of the values, used to calculate percentage.
    const total = utils.arraySum(processed_data.map(d => {return d.value}))

    // assigning each data entry a percentage value
    processed_data.forEach(d => {
        d.percentage = d.value / total;
    })

    // turning the data values into a pie graph, with the d.values being how much of the total donut. 
    const final_data = pie(processed_data);

    // defining the method to make arcs. since we have an inner radius and an outer radius, this is a donut. 
    const arc = d3.arc()
        .innerRadius(radius * 0.8)
        .outerRadius(radius)

    // all the paths made from the data values. 
    const paths = svg
        .selectAll()
        .data(final_data)
        .enter()
        .append('path')

    // making the arcs for each path, setting listeners, and creating the transitions. 
    paths
        .each( function(d, i) {
            d3.select(this)
                .classed('arcs', true)
                // .style('fill', function (d) { return `rgb(${255 * (1 - d.data.percentage)}, 42, 55)` })
                // .style('fill', function(d) {return `rgba(157, 42, 55, ${d.data.percentage})`})
                .style('fill', COLORS[i])
                .classed(alpha[i], true)
                .on("mouseover", function(d) {
                    const el = document.querySelector(`#${alpha[i]}`);
                    el.classList.add("focused");
                })
                .on("mouseout", function(d) {
                    const el = document.querySelector(`#${alpha[i]}`);
                    el.classList.remove("focused");
                })
                .transition()
                .duration(function(d) {return d.data.percentage * 3000})
                .delay( function(d) {
                    return utils.arraySum(paths.nodes().slice(0, i).map(el => d3.select(el).data()[0].data.percentage)) * 3000 + 200; // this line is literally just to calculate the delay such that the transitions are one after the other.
                })
                .attrTween('d', function (d) {
                    const i = d3.interpolate(d.startAngle, d.endAngle);
                    return function (t) {
                        d.endAngle = i(t);
                        return arc(d);
                    }
                })
            })
}

    // window.onresize = document.location.reload();

    // https://stackoverflow.com/questions/16265123/resize-svg-when-window-is-resized-in-d3-js
    // for responsive SVG design
    // https://stackoverflow.com/questions/27762982/how-to-display-percentage-to-the-d3-js-piechart
    // for percentages
    // https://bl.ocks.org/farazshuja/e2cb52828c080ba85da5458e2304a61f
    // for labeling slices with percentages
    // http://bl.ocks.org/nadinesk/99393098950665c471e035ac517c2224
    // for transitions
    // https://bl.ocks.org/mbostock/1125997
    // for chained transitions
