var corgi = document.getElementById("corgi");
var clickText = document.getElementById("clicks");

var clicks = 0;

clickText.innerHTML = "Clicks: " + clicks;

function corgiClick() {
	clicks++;
	clickText.innerHTML = "Clicks: " + clicks;
}