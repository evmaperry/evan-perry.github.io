/**
 * LOOPS
 * 
 * 1) Explain while, for, and for-in loops
 * 
 * 
 * 2) Be able to loop any number of times, forward counting up
 *    to some limit, backward counting down to 0
 * 
 * 
 * 3) Loop over an array, forwards and backwards
 * 
 * 
 * 4) Loop over an Object
 * 
 * 
 * Loops
 * 
 * 1) Explain while, for, and for-in loops
Loops repeat a block of code until some condition is met. A While loop runs until a certain condition returns false. In the code below, once the count varaible is re-assigned to 2, the While loop ceases executing. */

let count = 0;

while (count < 2){
  console.log(`count: ${count}`);
  count ++;
} // prints => count: 0 => count: 1   

/*For loops iterate a defined number of times. The loop statement consists of three expressions: 

  1) an initilization before the loop executes; this portion is typically used to initialize the loop's starting point.
  2) the condition that determines if the loop continues or ceases
  3) a block of code that executes afters the loop block; this portion usually changes a variable that is evaluated against the condition in portion 2.  
*/

for (let i = 0 ; i < 10 ; i++, console.log(`Looped ${i} times!`)); // prints => Looped 1 times! ... Looped 2 times! ... etc.

/*For-in loops enable looping over objects. A code example of a for-in loop is illustrated below. */


/* 
 * 2) Be able to loop any number of times, forward counting up to some limit, backward counting down to 0.

For loops can be defined to increment up or decrement down, and as many times as needed. */

let loopCount = 0
let numberOfTimes = 23

// Incrementing up
for (let i = 0 ; i < numberOfTimes ; i++){
  loopCount++;
};
console.log(`loopCount: ${loopCount}`) // prints => 23

// Decrementing down
for (let i = numberOfTimes ; i > 0 ; i--){
  loopCount--;
}
console.log(`loopCount: ${loopCount}`) // prints => 0


 /*
 * 3) Loop over an array, forwards and backwards

 Loops can also iterate over an array by configuring the looping code block to access array elements. An array's length property enables loops to control their execution according to the size of the array, and loops can be configured to access array elements in both forward and backward directions. */

let loopyArray = ["beep","boop","blam"];

for (let i = 0; i <= loopyArray.length-1; i++){
  console.log(loopyArray[i]);
} // prints => beep ... boop ... blam

for (let i = loopyArray.length-1; i >= 0 ; i--){
  console.log(loopyArray[i]);
} // prints => blam ... boop ... beep


/* 4) Loop over an Object
For-in loops are used to access the key-value pairs contained in an object. Object values are accessed by using bracket notation on the object. In the example below, "key" is a variable that stands in for the name of a key; each iteration, "key" is reassigned to a new key in the object. The loop's execution ends when all keys of an object have been accessed. */

let loopyObject = {key1 : 'value1', key2: 'value2'};

for (let key in loopyObject){
  console.log(key);
  console.log(loopyObject[key]);
} // prints => key1 ... value1 ... key2 ... value2

