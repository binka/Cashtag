var mongoose = require("express");
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
                            auto = true;
                            table[0] = ["PlayStation Music, which lets you play Spotify during games, launches in 41 countries around the world http://on.mash.to/1xtuC0D ","Play Station Music"];
                            new TWEEN.Tween( camera.position )
                                .to( { x: 0, y: - 25 }, 1500 )
                                .easing( TWEEN.Easing.Exponential.Out )
                                .start();
                            search(query);

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
