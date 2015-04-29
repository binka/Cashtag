// Autocomplete
$(function() {
  var availableTags = [
    "MMM", "AXP", "AAPL", "BA", "CAT", "CVX", "CSCO", "KO", "DIS", "DD", "XOM", "GE", "GS", "HD", "IBM", "INTC", "JNJ", "JPM", "MCD", "MRK", "MSFT", "NKE", "PFE", "PG", "TRV", "UTX", "UNH", "VZ", "V", "WMT"
  ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
    function isInArray(arr,obj) {
        return (arr.indexOf(obj) != -1);
    }
    $("#tags").keyup(function (e) {
        var code = (e.keyCode ? e.keyCode : e.which);
        //alert(code);
        if (code == 13) {
          //alert("Worked");
          var text = document.getElementById('tags').value.toUpperCase();
          if (isInArray(availableTags, text)) {
            window.location.href = "http://localhost:3000/" + text;
          } else {
            window.location.href = "http://localhost:3000/AAPL"
          }

        };
      });
  });
