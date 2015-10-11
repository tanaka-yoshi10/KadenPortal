$(function () {
    dataset = $('#device-map').data('chart')
    var width = $('#device-map').width();
    var height = $('#device-map').height();
    var scale = 1.0

    var svg = d3.select("#device-map").append("svg").attr({
        width: $('#device-map').width(),
        height: $('#device-map').height(),
    });

    var xScale = d3.scale.linear()
        .domain([0, width])
        .range([0, width * scale]);

    var yScale = d3.scale.linear()
        .domain([0, height])
        .range([0, height * scale]);

    var tooltip = d3.select("body").select("#tooltip")
    var color = d3.scale.category10();
    var a = svg.selectAll("circle").data(dataset).enter().append("a");
    a.attr("xlink:href", function (d) {
        return d["url"];
    })
        .on("mouseover", function (d) {
            return tooltip.style("visibility", "visible").text(d);
        })
        .on("mousemove", function (d) {
            return tooltip.style("top", (event.pageY - 20) + "px").style("left", (event.pageX + 10) + "px");
        })
        .on("mouseout", function (d) {
            return tooltip.style("visibility", "hidden");
        });

    var circle = a.append("circle");
    circle.attr("cx", function (d, i) {
        return xScale(d["x"]);
    }).attr("cy", function (d, i) {
        return yScale(d["y"]);
    }).attr("r", function (d) {
        return 10;
    }).attr("fill", function (d, i) {
        return color(i);
    });

    var text = svg.selectAll("text").data(dataset).enter().append("text");
    text.attr("x", function (d, i) {
        return xScale(d["x"] + 20);
    }).attr("y", function (d, i) {
        return yScale(d["y"] + 5);
    }).text(function (d, i) {
        return d["name"];
    }).attr("fill", function (d, i) {
        return color(i);
    });
});