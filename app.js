// const array1 = ['vanilla', 'chocolate', 'strawberry'];

// const array2 = array1.map((currentElement) => {
//   return currentElement + ' ice cream';
// });

// console.log(array2); // ['vanilla ice cream', 'chocolate ice cream', 'strawberry ice cream']

//EXERCISE 1:
//Use `.map()` to iterate over the following array:

const nums = [13, 87, 2, 89, 12, 4, 90, 63];

// Create a new array where each value is multiplied by 2 and log the new array.
const numsTimesTwo = nums.map((number) => {
	return number * 2;
});

console.log("EXERCISE 1: ", numsTimesTwo);

//EXERCISE 2:
// Given the following array, use destructuring to pull out the first and second values and place them into variables. Log both variables.

let pizzaToppings = ["Pineapple", "Olives", "Anchovies"];

const [firstTopping, secondTopping] = pizzaToppings;

console.log("EXERCISE 2: ", firstTopping, secondTopping);

//EXERCISE 3:
// Given the following object, use destructuring to create variables `make` and `model` that will hold the respective values.

const car = {
	make: "Audi",
	model: "q5",
};

const { make, model } = car;
console.log("EXERCISE 3: ", make, model);

//EXERCISE 4:
// Duplicate the following array using the spread operator and assign it to `controversialPizzaToppings`. Then, log the variable.

pizzaToppings = ["Pineapple", "Olives", "Anchovies"];
const controversialPizzaToppings = [...pizzaToppings];
console.log("EXERCISE 4: ", controversialPizzaToppings);

//EXERCISE 5:
// Duplicate the following object and spread its values into a new variable `myCar`.

// Change the `model` property of `myCar` to 'q7'. Log both objects.

const myCar = { ...car };

myCar.model = "q7";

console.log("EXERCISE 5: ", "car: ", car, "myCar: ", myCar);

//EXERCISE 6:
// Create an object named userProfile.
// Define a variable named propertyName and assign a string to it (like a username, age, or email).
// Use propertyName as a dynamic key in userProfile, assigning a relevant value.

const propertyName = "username";

const userProfile = {
	[propertyName]: "Philip",
};

console.log("EXERCISE 6: ", "userProfile: ", userProfile);

//EXERCISE 7 NOT HERE

//EXERCISE 8:
// Create a function that takes two parameters, `noun` and `adjective`,
//both with the following respective default values:

// 1. `cat`

// 2. `white`

// The function should log a sentence 'The cat is white.' by default.
//The function should substitute the appropriate parameters when supplied arguments.

console.log("EXERCISE 8: ");

function catColor(noun = "cat", adjective = "white") {
	console.log(`The ${noun} is ${adjective}`);
}
console.log("Defaults: ");
catColor();
console.log("Params set: ");
catColor("bird", "red");

//EXERCISE 9:
// Convert the following `if...else` statement in to a ternary:
console.log("EXERCISE 9: ");
let pizza = "tasty";
console.log("If/Else: ");
if (pizza === "tasty") {
	console.log("yum");
} else {
	console.log("yuck");
}
console.log("Ternary: ");
pizza === "tasty" ? console.log("yum") : console.log("yuck");

//EXERCISE 10
console.log("EXERCISE 10: ");
// 1. SET LANGUAGE
// Construct a single line of code that assigns a default value using the
//logical OR operator.
//This line should match the logic of the following statement:
// "LANG is equal to localLangConfig or the default value of English."

const localLangConfig = null; // Change to 'es', 'fr', etc., or keep it null

// a. Create a variable called LANG
// b. Assign LANG the value of localLangConfig or 'en' as a default

const LANG = localLangConfig || "en";

// Log the result
console.log("Language setting:", LANG);

// 2. SET WEBSITE THEME

const userSavedTheme = null; // Change to 'dark', 'contrast', etc., or keep it null

// a. Create a variable called USER_THEME
// b. Assign USER_THEME the value of userSavedTheme or 'light' as a default

const USER_THEME = userSavedTheme || "light";

// Log the result
console.log("User theme setting:", USER_THEME);

//EXERCISE 11:
// Now check for `cat.age` on `adventurer`. See how it errors out?
//Use optional chaining in a console.log that it returns undefined instead.
console.log("EXERCISE 11: ");
const adventurer = {
	name: "Alice",
};

let cat = adventurer.cat?.age;

console.log("cat?.age: ");
console.log(cat);

adventurer.cat = {}; // Define the cat object
adventurer.cat.age = 6; // Now you can safely assign age to cat
console.log("cat.age set to 6: ");
console.log(adventurer.cat);
console.log(adventurer.cat.age);
