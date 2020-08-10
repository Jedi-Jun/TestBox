var index = document.querySelectorAll('yt-formatted-string#index');
var time = document.querySelectorAll('span.ytd-thumbnail-overlay-time-status-renderer');
var min = [];
var sec = [];

for(var i = 0; i < index.length; i++) {
	var dump = time[i].innerText.split(":");
	min.push(Number(dump[0])); 
	sec.push(Number(dump[1]));
}

var minSum = min.reduce((prev, curr) => {return prev + curr});
var secSum = sec.reduce((prev, curr) => {return prev + curr});

var total = (minSum + (secSum / 60)) / 60;