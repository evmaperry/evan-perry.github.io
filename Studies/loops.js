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
 * 
 
/**
 * 
 * LOOPS
 * 
 * 0) Intro
 * 
 * Loops are another tool for manipulating a program's control flow. Loops enable the execution of
 * code a certain number of times or under certain conditions. The conditions under which a loop
 * executes may be set dynamically by defining those conditions in terms of variables or their
 * properties, such as an array's length property. Loops are great for accessing elements in an array
 * or the key-value pairs of an object.
 * 
 * 1) While, For, and For-in loops
 * 
 * Loops repeat a block of code until some condition is met. A While loop runs until a certain condition 
 * returns false. In the code below, once the count variable is re-assigned to 2, the While loop ceases 
 * executing. 
*/

let count = 0;

while (count < 2){
  console.log(`count: ${count}`);
  count ++;
} // prints => count: 0 => count: 1   

/**
 * For loops iterate a defined number of times. A For loop statement consists of three expressions: 
 * 
 * 1) an initilization before the loop executes; this portion is typically used 
 *    to initialize the loop's starting point.
 * 
 * 2) the condition that determines if the loop continues or ceases
 * 
 * 3) a block of code that executes afters the loop block; this portion usually 
 *    changes a variable that is evaluated against the condition in portion 2.  
*/

for (let i = 0 ; i < 10 ; i++, console.log(`Looped ${i} times!`)); // prints => Looped 1 times! ... Looped 2 times! ... etc.

/**
 * For-in loops enable looping over the key-value pairs (i.e., the properties) of objects. A code 
 * example of a For-in loop is below. 
*/

let printMyProperties = {key1: 'value1', key2: 'value2'}; // declare object variable with key-value pairs

for (let key in printMyProperties){         // for-in loops iterate over the keys of objects
  console.log(key, printMyProperties[key]); // 
} // prints => key1 value1 => key2 value2

/**
 * 
 * 2) Looping forward and backwards, and any number of times
 * 
 * For loops can be defined to increment up or decrement down, and execute as many times as needed
 * according to the assignments of variables inserted into to the loop declarations.
 * 
*/

let loopCount = 0
let numberOfTimes = 23

// First incrementing loopCount up
for (let i = 0 ; i < numberOfTimes ; i++){  // use numberOfTimes variable to define execution condition
  loopCount++;
};
console.log(`loopCount: ${loopCount}`) // prints => 23

// Then decrementing loopCount back down
for (let i = numberOfTimes ; i > 0 ; i--){
  loopCount--;
}
console.log(`loopCount: ${loopCount}`) // prints => 0

/**
 * 
 * 3) Looping forwards and backwards over an array
 * 
 * Loops can also iterate over an array by configuring the looping code block to access array elements. 
 * An array's length property enables loops to control their execution according to the size of the 
 * array, and loops can be configured to access array elements in both forward and backward directions. 
 *
*/

let loopyArray = ["beep","boop","blam"];

for (let i = 0; i <= loopyArray.length-1; i++){
  console.log(loopyArray[i]);
} // prints => beep => boop => blam

for (let i = loopyArray.length-1; i >= 0 ; i--){
  console.log(loopyArray[i]);
} // prints => blam => boop => beep


/**
 * 
 * 4) Looping over an Object
 * 
 * For-in loops are used to access the key-value pairs contained in an object. Object values are accessed 
 * by using bracket notation on the object. In the example below, "key" is a variable that stands in for 
 * the name of a key; each iteration, "key" is reassigned to a new key in the object. The loop's execution 
 * ends when all keys of an object have been accessed.
 * 
*/

let loopyObject = {key1 : 'value1', key2: 'value2'};

for (let key in loopyObject){
  console.log(key);
  console.log(loopyObject[key]);
} // prints => key1 ... value1 ... key2 ... value2

