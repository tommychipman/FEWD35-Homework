var userInfo = {
    firstname: "Arun",
    lastname: "Sood",
    role: "Instructor",
    pets: [
        {
            name: "Fido",
            type: "Dog",
            favorite_toy: "Tennis ball",
            age: 7
        },
        {
            name: "Kitty",
            type: "Cat",
            favorite_toy: "Feather on a stick",
            age: 3
        }
    ],
    favorite_number: 10
};


console.log(userInfo.firstname +" "+ userInfo.lastname +" is the "+ userInfo.role);

console.log(userInfo.firstname + userInfo.lastname +" has a " + userInfo.pets[0].type +" named " 
    +userInfo.pets[0].name +" who likes a " + userInfo.pets[0].favorite_toy);

    console.log(userInfo.firstname + userInfo.lastname +" has a " + userInfo.pets[1].type 
        +" named " 
    +userInfo.pets[1].name +" who likes a " + userInfo.pets[1].favorite_toy +
    " and it's favorite number is " +
    userInfo.favorite_number);