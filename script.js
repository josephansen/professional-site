// original source code for the clock: http://www.w3schools.com/js/tryit.asp?filename=tryjs_timing_clock

function startTime() {
	"use strict";
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
	var ampm = h >= 12 ? 'pm' : 'am';
  	h = h % 12;
  	h = h ? h : 12;
	h = checkTime(h);
    m = checkTime(m);
    document.getElementById('time').innerHTML =
    h + ":" + m + "  " + ampm;
    var t = setTimeout(startTime, 500);
}

function checkTime(i) {
	"use strict";
    if (i < 10) {
		i = "0" + i;
	}
    return i;
}