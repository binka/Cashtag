//var mongoose = require("express");
$(function () {
//$.getJSON('data/AAPL.json', function (data) {
var route = JSON.stringify(window.location.pathname); // take the route name and convert it into a string so that you can get the right path to the right json document
$.getJSON('data' + route.substring(1, route.length-1) + '.json', function (data) {

    pointRoute = route.substring(1, route.length-1) + "/" + "1419922800000";
    getTwitTiles(pointRoute, table);

    //alert(window.location.pathname)
    //alert(JSON.stringify(window.location.pathname))
    // Create the chart
    $('#container').highcharts('StockChart', {

        chart: {
          height: 150,
          borderColor: "black",
          borderWidth: 1,
          style: {

            color: "#fff"
          }
        },
        scrollbar: {
          enabled: false
        },
        navigator: {
          enabled: false,
          zIndex: -10
        },
        navigation: {
          buttonOptions: {
              enabled: false
          }
        },
        rangeSelector : {
            selected : 1,
            zIndex: -10
        },

        title : {
            text : '',
            enabled: false
        },

        series : [{
            name : 'Price',
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
            },
            backgroundColor: (255, 255, 255, 0.1)
        }],
        xAxis: {
          labels: {
             style: {
                color: '#fff'

             }
          }
        },
        plotOptions: {
            series: {
                cursor: 'pointer',
                point: {
                    events: {
                        click: function (e) {

                            pointRoute = route.substring(1, route.length-1) + "/" + this.x;

                            getTwitTiles(pointRoute, table);

                        }
                    }
                },
                marker: {
                    lineWidth: 1
                }
            },
            line: {
              style: {
                color: "FFFFF"
              }

            }
        }
    });
});
});

function getTwitTiles(pointRoute, table){
  auto = true;
  $.get(pointRoute, function(data1, status){ // sending a get request to the node server to then talk to the database
    for (i=0; i<data1.length; i++){ // Every time we get new Twits We Sort Them By Their Sentiment in Appropriate Arrays
      table.push(data1[i]);
      if (data1[i][3] === '"Bearish"') {
        tableBearish.push(data1[i]);
      }
      else if (data1[i][3] === '"Bullish"') {
        tableBullish.push(data1[i]);
      }
    }
    console.log(data1);
    new TWEEN.Tween( camera.position ) // we will only see new Tiles if the route is correct
        .to( { x: 0, y: - 25 }, 1500 )
        .easing( TWEEN.Easing.Exponential.Out )
        .start();
    removeTiles();
    addTiles(100, data1);
});
}
