var numofsquares = 6;
var colors = generatecolors(numofsquares);
var squares = document.querySelectorAll(".square");
var colorDisplay = document.getElementById("colordisplay");
var resmsg = document.querySelector("#resultmsg");
var h1 = document.querySelector(".gametitle");
var resetbtn = document.querySelector("#reset")
var pickedcolor = pickrandomcolor();
var mode = document.querySelectorAll('.mode');

for (var i = 0; i < mode.length; i++) {
	mode[i].addEventListener('click', function(){
		mode[0].classList.remove('active');
		mode[1].classList.remove('active');
		this.classList.add('active');
		if(this.textContent === "Easy Mode"){
		numofsquares = 3;
		}else {
			numofsquares = 6;
		}
		resets();
	});
}

resetbtn.addEventListener('click', function(){
	resets();
});

colorDisplay.textContent = pickedcolor;

for (var i = 0; i < squares.length; i++) {
	//add colors to squares
	squares[i].style.backgroundColor = colors[i];
	//listener to squares
	squares[i].addEventListener("click", function(){
		var rgbsquarecolor = this.style.backgroundColor;
		//if correct
		if (rgbsquarecolor === pickedcolor) {
			changesquarescolor(rgbsquarecolor);
			resmsg.textContent = "Good, Correct!";
			h1.style.transition = "all 2s";
			h1.style.backgroundColor = rgbsquarecolor;
			resetbtn.textContent = "Play Again?";
		}else{
			this.style.backgroundColor = "#484f4f";
			resmsg.textContent = "Try Again!";
		}
	});
}

function resets(){
	resmsg.textContent = "";
	reset.textContent = "New Game";
	colors = generatecolors(numofsquares); 
	pickedcolor = pickrandomcolor();
	colorDisplay.textContent = pickedcolor;

 	for (var i = 0; i < squares.length; i++) {
 		if (colors[i]) {
 			squares[i].style.display = "block";
 			squares[i].style.backgroundColor = colors[i];
 		}else{
 			squares[i].style.display = "none";
 		}
		//add colors to squares
		squares[i].style.backgroundColor = colors[i];
	}
	h1.style.backgroundColor = "#8ca3a3";
}

function changesquarescolor(color) {
	for (var i = 0; i < squares.length; i++) {
		squares[i].style.backgroundColor = color;
	}
}

function pickrandomcolor() {
	var rand = Math.floor(Math.random() * colors.length);
	return colors[rand];
}

function generatecolors(num) {
	var arr = [];
	for (var i = 0; i < num; i++) {
		arr.push(randomcolor());
	}
	return arr;
}

function randomcolor() {
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue + ")";
}












