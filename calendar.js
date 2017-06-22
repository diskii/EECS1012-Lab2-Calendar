function updatePage(){
	var d = new Date();
	var e = document.getElementById("info");
	e.innerHTML = "Time is now" + d;
}
function startUpdate(){
	updatePage();
	window.setInterval(updatePage,10*1000);
}

window.onload = startUpdate;
