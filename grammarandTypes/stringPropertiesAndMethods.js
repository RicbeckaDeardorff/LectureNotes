/*
-Properties are qualities associated with data type
-Strings only have one singular property for us to access, that being the length property
*/

let myName = "Ricbecka Deardorff";
console.log(myName.length);

/*
-Methods are tools that can help us manipulate data
-.property vs .method() <-- Make sure you have parentheses!
-Methods are functions associated with data types
*/

let myNameIs = "Ricbecka Deardorff";
console.log(myNameIs.toUpperCase());

let home = "My home is Muncie";
console.log(home.includes("Muncie"));

//Challenge: Use google, find MDN documentation for Strings, and use the split method to get an array back from this string

let sent = 'this sentence will be split into individual parts';
console.log(sent.split(" "));