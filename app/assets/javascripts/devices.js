$(function () {
    dataset = $('#device-map').data('chart')
    image   = $('#device-map').data('image')
    var width = $('#device-map').width();
    var height = $('#device-map').height();
    var scale = 1.0

    var drag = d3.behavior.drag()
        .on("drag", function(d,i) {
            d.x += d3.event.dx;
            d.y += d3.event.dy;
            d3.select(this).attr("transform", function(d,i){
                return "translate(" + [ d.x,d.y ] + ")";
            })
        });

    var svg = d3.select("#device-map").append("svg").attr({
        width: $('#device-map').width(),
        height: $('#device-map').height(),
    });
    svg.append('image').attr("xlink:href",image).attr("x", 0).attr("y", 0).attr("width", width).attr("height", height);

    var xScale = d3.scale.linear()
        .domain([0, width])
        .range([0, width * scale]);

    var yScale = d3.scale.linear()
        .domain([0, height])
        .range([0, height * scale]);

    var tooltip = d3.select("body").select("#tooltip")
    var color = d3.scale.category10();
    var g = svg.selectAll("circle").data(dataset).enter().append("g");
    g.attr("transform", function(d) {return 'translate(' + xScale(d["x"]) + ',' + yScale(d["y"]) + ')'}).call(drag);
    var a = g.append("a");
    a.attr("xlink:href", function (d) {
        return d["url"];
    }).on("mouseover", function (d) {
        d3.select('#product-thumbnail').attr('src', d.image);
        d3.select('#tooltip-name').text(d.name);
        d3.select('#tooltip-text').text(d.info);
        return tooltip.style("visibility", "visible");
    }).on("mousemove", function (d) {
        return tooltip.style("top", (event.pageY - 20) + "px").style("left", (event.pageX + 10) + "px");
    }).on("mouseout", function (d) {
        return tooltip.style("visibility", "hidden");
    });

    var circle = a.append("circle");
    circle.attr("r", function (d) {
        return 10;
    }).attr("fill", function (d, i) {
        return color(i);
    });

    var text = g.append("text");
    text.text(function (d, i) {
        return d["name"];
    }).attr("x", function (d, i) {
        return xScale(20);
    }).attr("y", function (d, i) {
        return yScale(5);
    }).attr("fill", function (d, i) {
        return color(i);
    });
});
