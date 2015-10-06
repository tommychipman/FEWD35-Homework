$(document).ready(function(){

var currentTurrent = "X";


$(document).on("click",".ttt-square", function(){
	if ($(this).html()===""){
	if(currentTurrent==="O") {
		// $(this).html("O");
		currentTurrent = "X";

	}else{
		// $(this).html("X");
		currentTurrent = "O";

	}

	$(this).html(currentTurrent);
}
});


});

// function mark-xline(){

//do some action
// $(this).innerHTML('X');

// }

// $("td").click("mark-x")