let food = ["Pecan Pie", "Shrimp", "Quesadilla", "Cheese Cake", "Hotdog"];

//regular for loop
for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}

food.forEach(foodItem => console.log(foodItem));

//the forEach method CANNOT return a value. Other than, that it does the same thing as a for loop. We can still manipulate information ie: .toUpperCase

food.forEach((foodItem, index) => console.log(foodItem, index));

//Can access the index this way

/*
CHALLENGE
************

    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - Add another movie at the end
    - And replace one of your existing movies with another one
*/

let movies = ["Grave of the Fireflies", "Julie & Julia", "Phantom of the Opera","Bedknobs and Broomsticks"]

movies.push("Practical Magic", "Kiki's Delivery Service");
console.log("Push:", movies);

let moviesSplice = movies.splice(1, 1, "Into the Woods");
console.log(moviesSplice);
console.log("Splice:", movies);

movies.forEach((movieItem) => console.log(movieItem));