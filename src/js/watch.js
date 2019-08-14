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

    const COLORS = {
        "Personal care activities": "red",
        "Eating and drinking": "orange",
        "Household activities": "yellow",
        "Purchasing goods and services": "green",
        "Caring for and helping household members": "blue",
        "Caring for and helping nonhousehold members": "indigo",
        "Working and work-related activities": "violet",
        "Educational activities": "gray",
        "Organizational, civic, and religious activities": "black",
        "Leisure and sports": "cyan",
        "Telephone calls, mail, and email": "chartreuse",
        "Other activities": "magenta" 
    }




    const pie = d3.pie()
        .value(function (d) { return d.value; })
    const processed_data = pie(d3.entries(data))

    svg
        .selectAll('whatever')
        .data(processed_data)
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

    window.onresize = document.location.reload;

    // https://stackoverflow.com/questions/16265123/resize-svg-when-window-is-resized-in-d3-js
    // for responsive SVG design
}