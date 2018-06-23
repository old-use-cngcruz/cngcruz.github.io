var bgText = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var bgColor = document.getElementById("gradient");
var random = document.getElementById("rdmButton")

// Default Color / Select Color
function setGradient() {
	bgColor.style.background =
	"linear-gradient(to right, "
	+ color1.value
	+ ","
	+ color2.value
	+ ")";
  	console.log(color1.value, color2.value)
	bgText.textContent = bgColor.style.background + ";";
}


// Randomize Color
function randomColor(){
	color1.value = setRandom.value;
	color2.value = setTandom.value;
	setGradient()
}

function setRandom(){
  random1 = "#"+Math.random().toString(16).slice(-6);
  random2 = "#"+Math.random().toString(16).slice(-6);
  bgColor.style.background = 
  "linear-gradient(to right, " 
  + random1
  + ", " 
  + random2
  + ")";
  console.log(random1, random2)
  color1.value = random1;
  color2.value = random2;
  bgText.textContent = bgColor.style.background + ";"
}

//Events

bgColor.addEventListener("onload", setGradient());

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

random.addEventListener("click", setRandom);