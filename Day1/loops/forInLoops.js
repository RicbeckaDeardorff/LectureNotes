/*
-For in loops are great for iterating over values in an object. Properties in objects are what's called enumberable

-For in loops iterate over an object's enumerable properties
*/

let student = {
    name: "Peter",
    awesome: true,
    degree: "JavaScript",
    week: 1
}

for (item in student) {
    console.log(item);
    console.log(student[item]);
}

let catArray = ["tabby", "british shorthair", "burmese", "maine coon", "rag doll"];

for (cat in catArray) {
    console.log(cat);
    console.log(catArray[cat]);
}

//Challenge: write a for in loop that capitalizes the first lietter of a name, and lowercases the rest of the name

let myName = "rIcBeCkA"
let capName; 

for (let l in myName) {
    if(l == 0){
        capName = myName[l].toUpperCase();
        console.log(capName);
    } else {
        capName += myName[l].toLowerCase();
    }
}

console.log(capName);