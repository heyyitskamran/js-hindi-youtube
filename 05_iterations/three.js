// for of
// The for...of loop is used to get the values from an iterable item such as:

// Array
// String
// Map
// Set

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    //console.log(num);
}

// const num of arr
// means: Take every value from arr, one by one, and store it temporarily in num.

const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps
// A JavaScript Map stores information in key-value pairs.

const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

// Here: "IN" is the key. "India": is the value.
// A Map cannot contain duplicate keys.


// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':-', value);
}

// A Map returns every entry as a small array:

// ["IN", "India"]
// ["USA", "United States of America"]
// ["FR", "France"]

// Therefore: const [key, value] uses array destructuring.


const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) {
//     console.log(key, ':-', value);
    
// }


// Why for...of does not directly work with an object

// You have:

// const myObject = {
//   game1: "NFS",
//   game2: "Spiderman",
// };

// This will cause an error:

// for (const [key, value] of myObject) {
//   console.log(key, value);
// }

// The error will be similar to:

// TypeError: myObject is not iterable

// A normal JavaScript object is not directly iterable using for...of.

// To use for...of, first convert the object into an iterable array using Object.entries().

// for (const [key, value] of Object.entries(myObject)) {
//   console.log(key, ":-", value);
// }

// Output:

// game1 :- NFS
// game2 :- Spiderman

// Object.entries(myObject) returns:

// [
//   ["game1", "NFS"],
//   ["game2", "Spiderman"],
// ];