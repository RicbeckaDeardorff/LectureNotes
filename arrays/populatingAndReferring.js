/*
-Arrays are containers that hold lists of items
-denoted by []

let list = [ "item1", "item2", "item3"];
    (1)   (2)  (3)

    1.Name of the array, or list
    2.The array is within square brackets
    3.Each item, regardless of data type, is separated by a comma
*/

let list = ["banana", "orange", "apple"];

console.log(list[1]);

let students = ["Tony", "Marshall", "Rhys", "Ray", 23, true ["Ryan", "Iesha", "Amira"]];

//console.log(students[2]);

/*
CHALLENGE
************
    -Dive into the nested array and pull the value "Amira"
    -Print out "Hello Amira!"
 */
// let studentName = students[6][2];
// console.log (`Hello ${studentName}!`);
    console.log("Hello", students[6][2] + "!");