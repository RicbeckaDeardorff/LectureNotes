//******
//Types
//******


/*
BOOLEANS

- Are ONLY True or False values
- Booleans are like lightswitches
*/

let on = true
console.log(on);

let off = false
console.log(off);

/*
NULL
- Null is like an empty bucket, it has the capacity to be filled, but it currently is not.
- Intentionally empty value
- Undefined is unintentional.
*/

let emptyBucket = null
emptyBucket = 'water'
console.log(emptyBucket);

/*
UNDEFINED
- Currently has no value assigned
-Acts as the means (plastic/metal) to create the bucket
*/

let metal; //correct way to assign an undefined variable
// let metal = undefined;s // wrong way, it is redunant
// to initalize if it is not defined

console.log(metal);


// NULL vs. UNDEFINED
//******************* 
//- Null is like an empty bucket, the bucket
// is there, but nothing in it.

//- Undefined is like the materials we ill use 
// to create the bucket

// We can also thing of these two variables as pizza boxes
//- Null is like the empty pizza box, just waiting for a pizza
//- Undefined is like the unassembled box

let emptyBox = null
let unassembledBox;

/*
Numbers
-In JavaScript numbers are literally just numbers
- You can add, subtract, multiply, and divide
- You can add decimals
*/

let degrees = 90;
console.log(degrees);

// will console.log() as 999999999999999
let precise = 999999999999999
console.log(precise);

// will console.log() as 100000000000000
let rounded = 99999999999999
console.log(rounded);

// will console.log()as 0.3000000000000004
let notQuite = 0.2 + 0.1
console.log(notQuite);

//Function to convert a string to numbers IF that
//that string is a number
let a = Number('123');
console.log(a);


/*
STRINGS
- A string is any value inbetween a set of quotes or back ticks
-A string can be noted by ', "", 
-'string' === "string" ===
*/

let stringOne = "double quotes"
let stringTwo = 'single quotes'
console.log(stringOne, stringTwo);

//Numbers vs. Strings
let addition = 1050 + 100
console.log(addition);
let concatenation = '1050' + '100'
console.log(concatenation);

//typeof is to check the data type of a variable. Also an operator.
console.log(typeof addition);
console.log(typeof concatenation);

/*
OBJECTS
- Can be denoted by {}
- Objects store 2 things, a key, and a value
- We can access these values, by digging into the oject
  With dot notation - object.value
*/

// Say we want to create an app like spotify
// We want to take in an artist's name, amount of albums
// they've produced, all members are still alive?

let artist = {
    // key  // value
    name: 'Queen',
    albums: 15,
    allMembersAlive: false
}

console.log(artist);
//Example of Dot notation
console.log(artist.allMembersAlive);
console.log(artist.name);

// how to add to object
artist.songName = 'I want it all'
console.log(artist);

//how to change an object's value
artist.songName = 'Bohemian Rhapsody'
console.log(artist)



/*
ARRAYS (Special type of Object with special behaviors)
// They are objects with the keys being the numbers.

let list =[ 'item 1', 'item 2', 'item 3' ]
              (0)       (1)        (2)

- Denote by []
-You can access a value by digging into the array with [0]
*/

let burritos = [ 'large', 4, true]

console.log(typeof burritos);

// console.log
// Addition vs Concatenation
// Addition is adding numbers together
// Concantenation is adding strings together


let add = 100 + 100
console.log(add);

let concat = 'Ricbecka' + "Deardorff"
console.log(concat);

let stillConcat = '150 + 100'
console.log(stillConcat);

//CHALLENGE

let firstName = 'Ricbecka'
let lastName = 'Deardorff'
let houseNumber = 3701
let aptNumber;
let street = 'W 31st'
let city = 'Muncie'
let state = 'Indiana'
let zipcode = '47302'


console.log(firstName, lastName, houseNumber, street, city, state, zipcode);
