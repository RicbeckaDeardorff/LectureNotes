let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

for (foodItem of food) {
    console.log(foodItem);
}
//Looping through arrays

food.push("Pizza");
console.log("Push:", food); //adds at end of array

let foodSplice = food.splice(1, 2, "Banana",);
console.log(foodSplice);
console.log("Splice:", food);

let foodPop = food.pop();
console.log(foodPop);
console.log("Pop:", food);

let foodShift = food.shift();
console.log(foodShift);
console.log("Shift:", food);

let foodUnshift = food.unshift("Popcorn", "Steak");
console.log(foodUnshift);
console.log("Unshift", food); //adds at beginning of array