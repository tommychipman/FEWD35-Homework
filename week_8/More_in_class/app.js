$(document).ready(function() {


var users = [
{
	firstname: "john",
	lastname: "doe",
	username:"jdoe",
	age: 34
},
{
	firstname: "steve",
	lastname: "scuba",
	username:"sscuba",
	age: 91

}

];

var source = $("#users-template").html();

var template = Handlebars.compile(source);

console.log(template(users[1]));

for(var i = 0; i < users.length; i++){
	$("tbody").append(template(users[i]));

$.ajax{
	type: "Put",
	url: "ttp://daretodiscover.herokuapp.com/uers",
	success: function(
		$("tbody") append(template(user.length

}


};

});

$.ajax{
	type: "GET",
	url: "ttp://daretodiscover.herokuapp.com/uers",
	success: function(users)
		$("tbody") append(template(user.length
for(var i = 0; i < users.length; i++){
	$("tbody").append(template(users[i]));


// url: http://daretodiscover.herokuapp.com/uers




