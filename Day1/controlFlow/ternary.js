//A ternary basically acts as a shortcut to writing if, if/else, and else/if statements.

let num = 0;

//ternary
(num > 0) ? console.log("yes") : console.log("no");

// '?' is if statement. ':' is else statement.

//instead of
if (num > 0) {
    console.log("yes");
} else {
    console.log("no");
}

//Mulitple Conditions

(num == 0) ? console.log("Hello") : (num < 0) ? console.log("Hi") : console.log("Goodbye")

if (num == 0) {
    console.log("Hello");
} else if ( num > 0) {
    console.log("Hi");
} else {
    console.log("Goodbye");
}

/*
Write a ternary that does the same thing as the age challenge
​
Age Challenge (if else):
​
    let age = 30;
    if (age >= 25) {
        console.log("Yay! You can rent a car!");
    } else if (age >= 21) {
        console.log("Yay! You can drink!");
    } else if (age >= 18) {
        console.log("Yay! You can vote!");
    } else {
        console.log("Sorry, you're too young to do anything fun.");
    }
*/

let age = 36;

(age >= 25) ? console.log("You can rent a car!") : (age >= 21) ? console.log("Yay! You can drink!") : (age >= 18) ? console.log("You can vote!") : console.log("Sorry, you are too young to do anything fun");