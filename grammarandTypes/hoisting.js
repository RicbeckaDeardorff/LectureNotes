/*
-First pass: Stores our variable and function delcarations, but does not assign values. Anything that needs hoisted is hoisted here
-Second pass: Assigns the values to our variables and executes any hoisted source code.
*/

//console.log(myName);
//let myName = "Ricbecka";

b();

function b() {
    let myName = "Ricbecka"
    console.log(myName);
    console.log("I have been hoisted!");
}