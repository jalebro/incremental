var seconds = 0;
var cursors = 0;


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




window.setInterval(function(){
	
	secondsClick(cursors);

}, 1000);