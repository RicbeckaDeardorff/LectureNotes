//ArrowFunctions
//**************** 
//Syntax

//declaration   //name      //parameters and fat arrow section
    let         phatArrow   = (/*parameter1, parameter2, etc*/) => console.log('fat arrow');
    // calling upon the function
        phatArrow();

//Consice Body Arrow Functions..
// - Return by default
// - Run when they are called upon (phatArrow())
// - May only be one line long



let fisk = () => console.log('Bobby och Jalen ater fisk!');
fisk();

//Block Body Arrow Function
// - Do NOT return by default, you must include a return statement
// - Run when they are called upon
// - May consist of more than one line, given they are wrapped in { curly bois }

let myName = (firstName, lastName) => {
    return `My name is ${firstName} ${lastName}`;
}
console.log(myName("Ricbecka", "Deardorff"));

// Consice vs Block Body functions
// Concise =>
// - returns implicitly (no return statement needed)
// - must be contained into one line

let apples = x => console.log(`There are ${x} apples`);
apples(100)

// Block =>
// - Does not contain an explicit return statement,
// we have to include it (return xyz)
// - Can be more than one line as contained
// by curly braces

let apples1 = x => {
    console.log(`There are ${x} apples`);
}
apples1(1000) 

//Note: More than one parameter will require parenthesis.
// - The default return of an arrow function is undefined.