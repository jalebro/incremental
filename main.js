var seconds = 60;
var minutes = 0;
var hours = 0;
var days = 0;
var weeks = 0;
var months = 0;
var years = 0;
var century = 0;
var millennium = 0;
var age = 0;
var epoch = 0;
var era = 0;
var eon = 0;

function secondsClick(number){
	seconds = seconds + number;
	document.getElementById("seconds").innerHTML = seconds;
};
function buyMinute(){
	var minuteCost = Math.floor(60 * Math.pow(1.1,minutes));
	if(seconds >= minuteCost){
		minutes = minutes + 1;
		seconds = seconds - minuteCost;
		document.getElementById('minutes').innerHTML = minutes;
		document.getElementById('seconds').innerHTML = seconds;
	};
	var nextCost = Math.floor(60 * Math.pow(1.1,minutes));
	document.getElementById('minuteCost').innerHTML = nextCost;
};
function buyHour(){
	var hourCost = Math.floor(3600 * Math.pow(1.1,hours));
	if(seconds >= hourCost){
		hours = hours + 1;
		seconds = seconds - hourCost;
		document.getElementById('hours').innerHTML = hours;
		document.getElementById('seconds').innerHTML = seconds;
	};
	var nextCost = Math.floor(3600 * Math.pow(1.1,hours));
	document.getElementById('hourCost').innerHTML = nextCost;
};
function buyDay(){
	var dayCost = Math.floor(86400 * Math.pow(1.1,days));
	if(seconds >= dayCost){
		days = days + 1;
		seconds = seconds - dayCost;
		document.getElementById('days').innerHTML = days;
		document.getElementById('seconds').innerHTML = seconds;
	};
	var nextCost = Math.floor(86400 * Math.pow(1.1,days));
	document.getElementById('dayCost').innerHTML = nextCost;
};
function buyWeek(){
	var weekCost = Math.floor(604800 * Math.pow(1.1,weeks));
	if(seconds >= weekCost){
		weeks = weeks + 1;
		seconds = seconds - weekCost;
		document.getElementById('weeks').innerHTML = weeks;
		document.getElementById('seconds').innerHTML = seconds;
	};
	var nextCost = Math.floor(604800 * Math.pow(1.1,weeks));
	document.getElementById('weekCost').innerHTML = nextCost;
};
function buyMonth(){
	var monthCost = Math.floor(2629822 * Math.pow(1.1,months));
	if(seconds >= monthCost){
		months = months + 1;
		seconds = seconds - monthCost;
		document.getElementById('months').innerHTML = months;
		document.getElementById('seconds').innerHTML = seconds;
	};
	var nextCost = Math.floor(2629822 * Math.pow(1.1,months));
	document.getElementById('monthCost').innerHTML = nextCost;
};
function buyYear(){
	var yearCost = Math.floor(31536000 * Math.pow(1.1,years));
	if(seconds >= yearCost){
		years = years + 1;
		seconds = seconds - yearCost;
		document.getElementById('years').innerHTML = years;
		document.getElementById('seconds').innerHTML = seconds;
	};
	var nextCost = Math.floor(31536000 * Math.pow(1.1,years));
	document.getElementById('yearCost').innerHTML = nextCost;
};
function buyCentury(){
	var centuryCost = Math.floor(3153600000 * Math.pow(1.1,centurys));
	if(seconds >= centuryCost){
		centurys = centurys + 1;
		seconds = seconds - centuryCost;
		document.getElementById('centurys').innerHTML = centurys;
		document.getElementById('seconds').innerHTML = seconds;
	};
	var nextCost = Math.floor(3153600000 * Math.pow(1.1,centurys));
	document.getElementById('centuryCost').innerHTML = nextCost;
};
function buyMillennium(){
	var millenniumCost = Math.floor(31536000000 * Math.pow(1.1,millenniums));
	if(seconds >= millenniumCost){
		millenniums = millenniums + 1;
		seconds = seconds - millenniumCost;
		document.getElementById('millenniums').innerHTML = millenniums;
		document.getElementById('seconds').innerHTML = seconds;
	};
	var nextCost = Math.floor(31536000000 * Math.pow(1.1,millenniums));
	document.getElementById('millenniumCost').innerHTML = nextCost;
};
function buyAge(){
	var ageCost = Math.floor(3600 * Math.pow(1.1,ages));
	if(seconds >= ageCost){
		ages = ages + 1;
		seconds = seconds - ageCost;
		document.getElementById('ages').innerHTML = ages;
		document.getElementById('seconds').innerHTML = seconds;
	};
	var nextCost = Math.floor(3600 * Math.pow(1.1,ages));
	document.getElementById('ageCost').innerHTML = nextCost;
};
function buyEpoch(){
	var epochCost = Math.floor(3600 * Math.pow(1.1,epochs));
	if(seconds >= epochCost){
		epochs = epochs + 1;
		seconds = seconds - epochCost;
		document.getElementById('epochs').innerHTML = epochs;
		document.getElementById('seconds').innerHTML = seconds;
	};
	var nextCost = Math.floor(3600 * Math.pow(1.1,epochs));
	document.getElementById('epochCost').innerHTML = nextCost;
};
function buyEra(){
	var eraCost = Math.floor(3600 * Math.pow(1.1,eras));
	if(seconds >= eraCost){
		eras = eras + 1;
		seconds = seconds - eraCost;
		document.getElementById('eras').innerHTML = eras;
		document.getElementById('seconds').innerHTML = seconds;
	};
	var nextCost = Math.floor(3600 * Math.pow(1.1,eras));
	document.getElementById('eraCost').innerHTML = nextCost;
};
function buyEon(){
	var eonCost = Math.floor(3600 * Math.pow(1.1,eons));
	if(seconds >= eonCost){
		eons = eons + 1;
		seconds = seconds - eonCost;
		document.getElementById('eons').innerHTML = eons;
		document.getElementById('seconds').innerHTML = seconds;
	};
	var nextCost = Math.floor(3600 * Math.pow(1.1,eons));
	document.getElementById('eonCost').innerHTML = nextCost;
};




window.setInterval(function(){
	secondsClick(minutes*10);
	secondsClick(hours*60);
	secondsClick(days*3600);
	secondsClick(weeks*86400);
	secondsClick(months*604800);
	secondsClick(years*2629822);
	//secondsClick(centurys*31536);
	//secondsClick(millenniums*3153600000);
	
}, 1000);