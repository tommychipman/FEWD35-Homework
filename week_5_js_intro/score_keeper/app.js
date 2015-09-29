document.addEventListener("DOMContentLoaded", function() {
	
var score = 0;


//Increase Score
document
	.getElementById("increase-5")
	.addEventListener("click", function() {
		score += 5;


// Reflect change in DOM
document
.getElementById("score")
.innerHTML = score + " Points";


	});


	//Decrease Score

	document
	.getElementById("decrease-5")
	.addEventListener("click", function(){ 
			if (score === 0) {
				return false;
			} else {
			score -=5;
		}

document
.getElementById("score")
.innerHTML = score + " Points";
	});

//Custom Score
document
	.querySelector("#submit-custom-score")
	.addEventListener("click", function() {
		var textScore = document
			.querySelector("#custom-score")
			.value;

			var numScore = parseInt(textScore);

			score = numScore;

			document
			.querySelector("#score")
			.innerHTML = score + " Points";
	});


});	