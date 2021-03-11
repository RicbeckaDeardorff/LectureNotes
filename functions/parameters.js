/*
-Function parameters are place holders for data that we pass into the function when invokin the function

                (1)
    function hi(name) {
        console.log(`Hi ${name}`);
                           (2)
    }
           (3)
    hi("Ricbecka";)

    1-The parameter(s) tht the function is accepting or holding.
    2-Using string interpolation, we can refer to the parameter given to the function
    3-This is where we define what the parameter's value will be
*/

function ricbecka (ticketOne, ticketTwo) {
    console.log(`I exchanged my ticket for a ${ticketOne} and ${ticketTwo}`);
}

ricbecka ("Sprite", "pepperoni pizza");

let arr = ['This', 'is', 'really', 'cool'];

function sendMessage(x) {
    for (let words of x) {
        console.log(words);
    }
}

sendMessage(arr);

/*
- Write a function that takes two parameters:
        - one parameter is for a first name,
        - the other parameter is for a last name;
        -have them come together in a variable inside the function.
        -console.log 'Hello, my name is <your name.'
        -call (or invoke) your function
*/

function challenge(firstName, lastName) {
    let yourName = "";
    yourName += firstName + "" + lastName;
    console.log("Hello, my name is " + yourName);
}

challenge("Ricbecka", "Deardorff");