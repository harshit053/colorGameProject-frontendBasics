var numSquares = 6;
var colors = [];
var pickedColor;


var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetBtn = document.querySelector("#reset");
var modeBtn = document.querySelectorAll(".mode");

init();

function init()
{
	setupModeButtons();

	setupSquares();

	reset();
}

/*easyBtn.addEventListener("click", function()
{
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
	{
		if(colors[i])
			squares[i].style.background = colors[i];
		else
			squares[i].style.display = "none";
	}
});


hardBtn.addEventListener("click", function()
{
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	}
});*/




resetBtn.addEventListener("click", reset);

	
/*function reset()
{
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
		squares[i].style.background = colors[i];
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
	this.textContent = "New Colors";
});*/


colorDisplay.textContent = pickedColor;

function setupModeButtons()
{
	for(var i = 0; i < modeBtn.length; i++)
	{
		modeBtn[i].addEventListener("click", function()
		{
			modeBtn[0].classList.remove("selected");
			modeBtn[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "EASY" ? numSquares = 3 : numSquares = 6;
			reset();
		});
	}
}

function setupSquares()
{
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].addEventListener("click", function()
			{
			 	var clickedColor = this.style.background;
			 	if(clickedColor === pickedColor)
			 	{
			 		messageDisplay.textContent = "Correct!";
			 		changeColor(clickedColor);
			 		h1.style.background = clickedColor;
			 		resetBtn.textContent = "Play Again"
			 	}
			 	else
			 	{
			 		this.style.background = "#232323";
			 		messageDisplay.textContent = "Try Again";
			 	}
			});
	}
}

function changeColor(color)
{
	for(var i = 0; i < squares.length; i++)
	{
		squares[i].style.background = color;
	}
}

function pickColor()
{
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num)
{
	var arr = [];
	for(var i = 0; i < num; i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor()
{
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

function reset()
{
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++)
	{
		if(colors[i])
		{
			squares[i].style.display = "block";
			squares[i].style.background = colors[i];
		}
		else
			squares[i].style.display = "none";
	}
	h1.style.background = "steelblue";
	messageDisplay.textContent = "";
	resetBtn.textContent = "New Colors";
}