let weather = 55;

if (weather < 70) {
    console.log("Wear a jacket!");
} else {
    console.log("No jacket necessary!");
}

/*
Bronze:
    Write an if else statement that checks your name;
    If it is your name, consol log '<name>'
    If the name does not match, consol log 'Hello, what is your name?'

Silver:
    If it is your name, console log 'Hello, my name is <name>'

Gold:
    If it is not your name, console log 'Hello, is your name <name here> ?'
*/

//Bronze

let bronzeName = "Ricbecka Deardorff";

if (bronzeName == "Ricbecka Deardorff") {
    console.log("Ricbecka Deardorff");
} else {
    console.log("Hello, what is your name?");
}

//Silver and Gold

let myName = "Ricbecka Deardorff";

if (myName == "Ricbecka Deardorff") {
    console.log("Hello, my name is Ricbecka Deardorff.");
} else {
    console.log("Hello, is your name Ricbecka Deardorff?");
}

/*
Use this string: let name = 'zAchARy';
​
Bronze:
    Write an if else statement that looks at the first letter of a string. If it is uppercase, console.log the string;
    If it is not console.log 'hey, this isn't written correctly'
    
Silver:
    If the first letter of a string is uppercase, only console.log that letter
    if it is not, console.log the rest of the string Without the first letter, and change them to lowercase
    
Gold:
    If the first letter of a string is uppercase, console.log that that first letter of a string  plus the rest of the string to lowercase
    If it is not, console.log the first letter of the string to uppercase plus the rest of the string to lowercase
*/

//Bronze

let nameOne = "zAchARy";

if (nameOne.charAt(0) === nameOne.charAt(0).toUpperCase ) {
    console.log(nameOne);
} else {
    console.log("Hey, this isn't written correctly.");
}

//Silver 

let nameTwo = "zAchARy";

if (nameTwo[0] === nameTwo[0].toUpperCase()) {
    console.log(nameTwo[0]);
} else {
    console.log(nameTwo.substr(1).toLowerCase());
}

// Gold

let results = "zAchARy";

if (nameTwo[0] === nameTwo[0].toUpperCase()){
    results = nameTwo[0] + nameTwo.substr(1).toLowerCase();
} else {
    results = nameTwo[0].toUpperCase() + nameTwo.substr(1).toLowerCase();
}
console.log(results);
​
// console.log(results += myName.substr(1).toLowerCase());

//Else If Statements

/*
    Look up the format for an Else If statement
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 33;

if (age <= 17) {
    console.log("sorry, you are too young to do anything.");
} else if (age >= 25) {
    console.log("You can rent a car!");
} else if (age >= 21) {
    console.log("You can drink!");
} else { (age >= 18)
    console.log("You can vote!");
}


if (age > 25) {
    console.log("You can rent a car!");
} else if ((age <25) && (age > 21)) {
    console.log("You can drink!");
} else if ((age <21) && (age >18)) {
    console.log("You can vote!");
} else {
    console.log("Sorry, you are too young to do anything!");
}