$(document).on("click", "#get-wine-data", function(){

$.ajax({
		type: "GET",
		url:"http://daretodiscover.herokuapp.com/wines",
		success: function(wines) {
			for (var i = 0; i < wines.length; i++) {
				console.log(wines[i].name);
				console.log(wines[i].year);
				console.log(wines[i].price);
				console.log(wines[i].grapes);
				console.log(wines[i].country);
				console.log(wines[i].region);
				console.log(wines[i].country);
			}

		}

});

});

// step 1: Create event listerner for submit event
// step 2: event.prevent.default to stop form submitting
// step 3: Create obbject from data
// step 4: Perform the AJAX POST request
// step 5: Handle Success reset form

$(document).on("click", ".wine-submit", function(event){
	event.preventDefault();
	var wineData = {
		name:$("input[name ='name']").val(),
		grapes:$("input[name ='grapes']").val(),
		year:$("input[name ='year']").val(),
		region:$("input[name ='region']").val(),
		country:$("input[name ='country']").val(),
		description:$("input[name ='description']").val(),
		picture:$("input[name ='picture']").val(),
		price:$("input[name ='price']").val(),
	};
console.log(wineData);
});

$.ajax({
		type: "POST",
		url:"http://daretodiscover.herokuapp.com/wines",
		success: function(){
			alert("wine added successfully")
			$("form")[0].reset();

		},
		error: function(){
			alert("Fuck it's wrong!")
		}
	});



