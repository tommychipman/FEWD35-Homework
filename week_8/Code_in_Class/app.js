$(document).ready(function(){

    // $.ajax({
    //     type: "GET",
    //     url:"http://daretodiscover.herokuapp.com/users",
    //     success: function(users) {
    //         console.log(users[0].firstname +" "+ users[0].lastname);

    //         for (var i = 0; i < users.length; i++){
    //         console.log(users[i].firstname)
    //     }

    //     users.forEach(function(user) {
    //         for(key in user) {
    //                 console.log(key + ":" + user[key])
    //                 }
    //     }

    //     for(i in data) {
    //         for (key in users[i]) {
    //             console.log
    //         }

    //     }

    //     },
    //     error: function() {
    //         alert("error!");
    //     }

    // });


    event.preventDefault();
});

var userData = {
    firstname: $("input[name='firstname']").val(),
     lastname: $("input[name='lastname']").val(),
      username: $("input[name='username']").val(),
       age: $("input[name='age']").val(),
   };

$.ajax({
    type: "POST",
    url: "http://daretodiscover.herokuapp.com/users",
    data: userData,
    success: function(){
        $("form")[0].reset();
        alert ("User added Successfully!");
    },
    error: function(){}

})


});