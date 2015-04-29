$.fn.wave = function(options) {
    //var WAVELENGTH_MAGNIFY = 5;
    var wave = $.extend({
        wavelength: 100,
        amplitude: 60,
        phase: 0,
        width: 600,
        color: "DodgerBlue",
        bgColor: "",
        thickness: 3,
        paddingH: 0,
        paddingV: 0,
        grid: false,
        gridSize: 20,
        gridThickness: 1,
        gridColor: "lightBlue"
    }, options );
    var width = wave.width + wave.paddingH * 2;
    var height = wave.amplitude * 2 + wave.paddingV * 2;

    this.css({
        "width": width,
        "height": height,
        "display": "inline-block"
    });

    //create canvas
    var canvas = document.createElement("canvas");
    canvas.width = width;
    canvas.height = height;
    document.getElementById(this.attr("id")).appendChild(canvas);

    //create buffer
    var buffer = document.createElement("canvas");
    buffer.width = width;
    buffer.height = height;

    //get context
    var ctx = buffer.getContext('2d');
	ctx.clearRect(0, 0, buffer.width, buffer.height);

    //draw background
    if(wave.bgColor != "") {
        ctx.fillStyle = wave.bgColor;
        ctx.fillRect(0, 0, buffer.width, buffer.height);
    }
    if(wave.grid) {
        ctx.strokeStyle = wave.gridColor;
        ctx.lineWidth = wave.gridThickness;
        var increment = wave.gridSize;

        ctx.beginPath();
        for ( var i = 1; i < height / increment; i++) {
            ctx.moveTo(0, i * increment);
            ctx.lineTo(width, i * increment);
        }
        for ( var j = 1; j < width / increment; j++) {
            ctx.moveTo(j * increment, 0);
            ctx.lineTo(j * increment, height);
        }
        ctx.stroke();
    }

    //draw wave
	ctx.strokeStyle = wave.color;
	ctx.lineWidth = wave.thickness;

	var phase = wave.phase * Math.PI / 180;
	var amp = wave.amplitude - wave.thickness / 2;
	var freq = 2 * Math.PI * (1 / wave.wavelength);
	var yOrigin = height / 2;

	var y1, y2;
	ctx.beginPath();
	for ( var i = 0; i < wave.width; i++) {
		y1 = amp * Math.sin(phase + freq * i) + yOrigin;
		y2 = amp * Math.sin(phase + freq * (i + 1)) + yOrigin;
		ctx.moveTo(i + wave.paddingH, y1);
		ctx.lineTo(i + wave.paddingH + 1, y2);
	}
	ctx.stroke();

	var front_ctx = canvas.getContext("2d");
	front_ctx.clearRect(0, 0, wave.width, wave.height);
	front_ctx.drawImage(buffer, 0, 0);

    return this;
};