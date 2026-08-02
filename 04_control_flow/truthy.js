const userEmail = []

if (userEmail) {
    console.log("Got user email");
} else {
    console.log("Don't have user email");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userEmail.length === 0) {
//     console.log("Array is empty");
// }

const emptyObj = {}

if (Object.keys(emptyObj).length === 0) {
    console.log("Object is empty");
}
// Object.keys(emptyObj) This returns an array of all keys/properties inside the object.


// Nullish Coalescing Operator (??): null undefined
let val1;
// val1 = 5 ?? 10
// val1 = null ?? 10
// val1 = undefined ?? 15
val1 = null ?? 10 ?? 20

// ?? is called the Nullish Coalescing Operator.
// It checks only two values:

// null
// undefined

// Meaning: Use the right side only when the left side is null or undefined.

// Your code:

// let val1;
// val1 = null ?? 10 ?? 20

// Output/value: val1 = 10

// Why?

// JavaScript reads it left to right:

// null ?? 10 ?? 20

// First: null ?? 10

// Because left side is null, JavaScript chooses the right side:

// 10

// Now it becomes: 10 ?? 20

// Because 10 is not null or undefined, JavaScript keeps 10.

// Final value: 10

//  # Difference between ?? and ||
// This is important.

// || checks falsy values:

// false
// 0
// ""
// null
// undefined
// NaN

// But ?? checks only:

// null
// undefined

// # Simple rule -> Use ?? when you want a fallback only for missing values:

// const username = inputUsername ?? "Guest";

// Meaning:

// If inputUsername is null or undefined, use "Guest".
// Otherwise use inputUsername.

console.log(val1);

// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("less than 80") : console.log("more than 80")