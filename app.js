var index = 0;

function changeColors(){
	var colors =["red", "blue", "green", "yellow", "purple", "orange"];
	document.getElementById("body").style.background = colors[index++];

	if (index > colors.length - 1)
		index = 0
}