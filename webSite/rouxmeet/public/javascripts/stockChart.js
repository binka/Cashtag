//var mongoose = require("express");
$(function () {
//$.getJSON('data/AAPL.json', function (data) {
var route = JSON.stringify(window.location.pathname); // take the route name and convert it into a string so that you can get the right path to the right json document
$.getJSON('data' + route.substring(1, route.length-1) + '.json', function (data) {
    //alert(window.location.pathname)
    //alert(JSON.stringify(window.location.pathname))
    // Create the chart
    $('#container').highcharts('StockChart', {

        chart: {
          height: 200
        },
        scrollbar: {
          enabled: false
        },
        navigator: {
          enabled: true
        },
        navigation: {
          buttonOptions: {
              enabled: false
          }
        },
        rangeSelector : {
            selected : 1
        },

        title : {
            text : ''
        },

        series : [{
            name : '',
            data : data,
            type : 'area',
            threshold : null,
            tooltip : {
                valueDecimals : 2
            },
            fillColor : {
                linearGradient : {
                    x1: 0,
                    y1: 0,
                    x2: 0,
                    y2: 1
                },
                stops : [
                    [0, Highcharts.getOptions().colors[0]],
                    [1, Highcharts.Color(Highcharts.getOptions().colors[0]).setOpacity(0).get('rgba')]
                ]
            }
        }],

        plotOptions: {
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function (e) {
                            //var point = this.series.data.indexOf(this.point);
                            var point = this.x + ': ' + this.y + ' was last selected';
                            auto = true;
                            $.get(route.substring(1, route.length-1) + "/" + this.x, function(data1, status){ // sending a get request to the node server to then talk to the database
                              table = data1;
                              console.log(data1);
                              new TWEEN.Tween( camera.position ) // we will only see new Tiles if the route is correct
                                  .to( { x: 0, y: - 25 }, 1500 )
                                  .easing( TWEEN.Easing.Exponential.Out )
                                  .start();
                              removeTiles();
                              addTiles(60);
                            });

                        }
                    }
                },
                marker: {
                    lineWidth: 1
                }
            }
        },
    });
});
});
