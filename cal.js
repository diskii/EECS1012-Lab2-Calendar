var lastTime = null;

function updatePage(){
	var d = new Date();
	var e = document.getElementById("info");
	var day = d.getDay();
	var hour = d.getHours();
	var minutes = d.getMinutes();
	if(minutes < 30){
		hour = hour-1;
	}
	var block = "time "+day+":"+hour;
	e.innerHTML = "Time is now "+block;
	var block1 = day+":"+hour;
	var c = document.getElementById(block1);

	if((lastTime != null) && (lastTime != c)){
		lastTime.style.background = 'white';
	}
	if(c != null ){
		c.style.background = 'red';
	}
	lastTime = c;
	
}	
function startUpdate(){
	updatePage();
	window.setInterval(updatePage,10*1000);
}
window.onload = startUpdate;