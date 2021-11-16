var video = document.querySelector("#player1");

window.addEventListener("load", function() {
	console.log("Good job opening the window")

});

document.querySelector("#play").addEventListener("click", function() {
	video.play()
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
 	console.log("Play Video");
 });

 document.querySelector("#pause").addEventListener("click", function() {
	video.pause()
 	console.log("Pause Video");
 });

 document.querySelector("#slower").addEventListener("click", function() {
	var slowdown = video.playbackRate = 0.95 * video.playbackRate;
 	console.log("New speed is " + slowdown);
 });

 document.querySelector("#faster").addEventListener("click", function() {
	var speedup = video.playbackRate = 1.05 * video.playbackRate;
 	console.log("New speed is " + speedup);
 });

 document.querySelector("#skip").addEventListener("click", function() {
	var ori_time = video.currentTime;
	var new_time = video.currentTime += 15;

	if (ori_time > 52){
		console.log("Going back to beginning");
		new_time = ori_time = video.currentTime = 0;
		console.log("New location " + new_time);
	}
	else{
		console.log("Original location " + ori_time);
		console.log("New location " + new_time);
	}
 });

 document.querySelector("#mute").addEventListener("click", function() {
	if(document.getElementById("mute").innerHTML == "Mute"){
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	}
	else{
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
 });

 document.querySelector("#slider").addEventListener("change", function() {
	video.volume = this.value / 100;
	console.log(video.volume);
	document.getElementById("volume").innerHTML = video.volume * 100 + "%";
 });

 document.querySelector("#vintage").addEventListener("click", function() {
	video.className = "oldSchool";
 });

 document.querySelector("#orig").addEventListener("click", function() {
	video.className = "video";
 });

