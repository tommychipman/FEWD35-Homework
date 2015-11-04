$(document).ready(function(){

var source = $("#replace_info").html();
var template = Handlebars.compile(source);

$(".btn").on("click", function(event){
	event.preventDefault();

	var artist = $("#artist").val();

	$.ajax({
		type: "GET",
		url: "https://api.spotify.com/v1/search?type=artist&q="+ artist +"&type=track&limit=1",
		success: function(artistData){
			console.log(artistData.artists.items[0].id)

			var artistId = artistData.artists.items[0].id;

			$.ajax({
				type:"GET",
				url: "https://api.spotify.com/v1/artists/" + artistId + "/top-tracks?country=us",
				success: function(track){
					console.log(track.tracks[0].preview_url)

					var trackData={ 
						trackName: track.tracks[0].name,
						previewUrl: track.tracks[0].preview_url
						
					}	

					var outputHtml = template(trackData);
					$("#container").html(outputHtml);

				},
			})
		},
		error: function(){}
	})

});





});