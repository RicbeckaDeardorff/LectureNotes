/* 
- Object bracket notation can also allow us to find a value in an object
- Using object bracket notation can be handy if we want to store a key in a variable and then use that variable to parse through an object
- This works because all keys in an object are strings
*/

let garden = {
    vegetable: "zucchini",
    flower: "flower",
    fruit: "grape", //"my fruit"
    water: true,
    sun: true,
    size: 10
}

let test = Object.keys(garden);
console.log(test);
console.log(typeof test[0]);

console.log(garden.vegetable);
console.log(garden["vegetable"]); 
// Braket notation is useful for grabbing keys that have a space in between words
let baking = {};
baking["zucchini"] = "better make some bread";
console.log(baking);

