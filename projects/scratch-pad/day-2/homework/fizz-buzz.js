// #!/usr/bin/env node

'use strict';

/**
 * 2: Fizz Buzz
 *
 *  a. Write a Function called fizzBuzz that prints the numbers from 1 to 100.
 *  b. BUT, for multiples of three print “Fizz” instead of the number.
 *  c. AND for the multiples of five print “Buzz”.
 *  d. FINALLY, for numbers which are multiples of both three and five print “FizzBuzz”.
*/
function fizzBuzz() {
    // YOUR CODE GOES BELOW HERE //
    // declare for loop that iterates from 1 to 100
    for (let i = 1; i <= 100; i++){
        // declare conditional to check if i is divisible by 3 and 5
        if ( i%3 === 0 && i%5 === 0){
            console.log("FizzBuzz"); // if so, log 'FizzBuzz' to console
        }
        // declare else if to check if i is divisible by 3
        else if (i%3===0){
            console.log("Fizz"); // if so, log 'Fizz' to console
        }
        // declare else if to check if i is divisible by 5
        else if (i%5===0){
            console.log("Buzz") // if so, log 'Buzz' to console
        }
        // declare else to otherwise print i
        else {console.log(i);}
    }


    // YOUR CODE GOES ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.fizzBuzz = fizzBuzz
}