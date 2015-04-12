//var mongoose = require("express");
$(function () {
$.getJSON('http://www.highcharts.com/samples/data/jsonp.php?filename=aapl-c.json&callback=?', function (data) {

    // Create the chart
    $('#container').highcharts('StockChart', {

        chart: {
          height: 200
        },
        scrollbar: {
          enabled: false
        },
        navigator: {
          enabled: false
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
                            $.get("/test/" + this.x, function(data1, status){ // sending a get request to the node server to then talk to the database
                              table[0] = data1;
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
