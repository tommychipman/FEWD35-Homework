//step1

//step2

//step3

//step4

//steo5 Take HTML generated from htmlGenerator and .append()
//it to the HTML







$(document).ready(function() {

	var source = $("#users-template").html();
	var htmlGenerator = Handlebars.compile (source);

	console.log(htmlGenerator);

	$.ajax({
		type: "GET",
		url: "http://daretodiscover.herokuapp.com/users",
		success: function(stupid){
			for (var i =0; i <stupid.length; i++) {
				// console.log(stupid[i].firstname);
				// console.log(stupid[i].lastname);
				// console.log(stupid[i].username);
				// console.log(stupid[i].age);
			console.log(htmlGenerator(stupid[i]));
			$("#user-container").append(htmlGenerator(stupid[i]));
			}

	},
			error: function (){}

	});
});

