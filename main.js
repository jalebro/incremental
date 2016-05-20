var seconds = 0;
var cursors = 0;
var clocks = 0;

function secondsClick(number){
	seconds = seconds + number;
	document.getElementById("seconds").innerHTML = seconds;
};

function buyCursor(){
	var cursorCost = Math.floor(10 * Math.pow(1.1,cursors));
	if(seconds >= cursorCost){
		cursors = cursors + 1;
		seconds = seconds - cursorCost;
		document.getElementById('cursors').innerHTML = cursors;
		document.getElementById('seconds').innerHTML = seconds;
	};
	var nextCost = Math.floor(10 * Math.pow(1.1,cursors));
	document.getElementById('cursorCost').innerHTML = nextCost;
};

function buyClock(){
	var clockCost = Math.floor(100 * Math.pow(1.1,clocks));
	if(seconds >= clockCost){
		clocks = clocks + 1;
		seconds = seconds - clockCost;
		document.getElementById('clocks').innerHTML = clocks;
		document.getElementById('seconds').innerHTML = seconds;
	};
	var nextCost = Math.floor(100 * Math.pow(1.1,clocks));
	document.getElementById('clockCost').innerHTML = nextCost;
};








window.setInterval(function(){
	
	secondsClick(cursors);
	secondsClick(clocks*10);

}, 1000);