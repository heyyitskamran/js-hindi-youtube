// Immediately Invoked Function Expressions (IIFE)
// A function that runs immediately after it is created.


(function chai(){
    // named IIFE
    console.log(`DB CONNECTED`);
})();

( (name) => {
    console.log(`DB CONNECTED TWO ${name}`);
} )('hitesh')

