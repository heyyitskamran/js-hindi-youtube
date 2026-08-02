// const user = {
//     username: "hitesh",
//     price: 999,

//     welcomeMessage: function() {
//         console.log(`${this.username} , welcome to website`);
//         console.log(this);
//     }

// }

// this.username : Get username from the object that called this function.

// user.welcomeMessage means you are only accessing the function/property, not running it.
// user.username = "sam"
// user.welcomeMessage() means you are running the function and this will refer to the object that called it, which is user in this case.

// console.log(this);

// function chai(){
//     let username = "hitesh"
//     console.log(this.username);
// }

// chai()


// const chai = function () {
//     let username = "hitesh"
//     console.log(this.username);
// }

const chai =  () => {
    let username = "hitesh"
    console.log(this);
}


chai()

// const addTwo = (num1, num2) => {
//     return num1 + num2 // When you use {}, you must write return if you want to send a value back.
// }

// const addTwo = (num1, num2) =>  num1 + num2 // implicit return. optional parentheses

// const addTwo = (num1, num2) => ( num1 + num2 ) // implicit return

// With {}  → write return
// Without {} → automatic return
// With () → automatic return, useful for grouping or returning objects

// const addTwo = (num1, num2) => ({username: "hitesh"})


// console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()

// -------------------------
// Important difference
// Arrow function
// const chai = () => {
//     console.log(this);
// }

// chai()

// this comes from outer scope.

//------------------------
// Normal function
// function chai() {
//     let username = "hitesh"
//     console.log(this);
// }

// chai()

// Normal functions have their own this, depending on how they are called.