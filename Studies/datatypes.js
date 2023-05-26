/**
 * 
 * DATATYPES
 * 
 * 0) Intro
 * 
 * Every variable defined in JavaScript is a token of a certain DataType. Each 
 * DataType is typified by a unique set of programmatic functionalities: when we 
 * assign a variable, we implicitly ascribe to it a datatype, and load the 
 * variable with functionality. JavaScript is weakly typed, meaning the DataType 
 * is not always directly declared, but is often implied by the kinds of characters 
 * used when assigning the variable.    
 * 
 * 
 * 1) Number
 * 
 * A Number Datatype is initialized when a variable is assigned to only numeric 
 * characters and accessory characters, like decimal points and "e", which is used
 * for scientific notation. Variables assigned to values like 12, 
 * 1345454.5532352356 or 1.5e10 will be number DataTypes. Number DataTypes 
 * are great for performing mathematical operations. We can use the typeof operator 
 * to log the DataType of a variable assigned to numbers. 
 * 
*/

let firstNumber = 12;
let secondNumber = 1345454.5532352356;
let thirdNumber = 1.5e10;
// let notANumber = Andre3000;  

console.log(typeof firstNumber, typeof secondNumber, typeof thirdNumber); // prints => number number number
// console.log(typeof noANumber); // would print => ReferenceError: Andre3000 is not defined

let fourthNumber = firstNumber + secondNumber - secondNumber + thirdNumber;
console.log(thirdNumber); // prints => 15000000012

/** 
 *  
 * 2) String
 * 
 * A String DataType is initialized when a sequence of characters is contained 
 * by quotation marks. Single quotes, double quotes and backticks all initialize 
 * strings. Strings are concatenated together using the addition operator +.  
 * 
*/

let firstString = 'Single quotes';
let secondString = "Double quotes";
let thirdString = `Backticks`;

console.log(firstString + " " + secondString + " " + thirdString); // prints => Single quotes Double quotes Backticks

/**
 * 
 * 3) Boolean
 * A Boolean DataType is initialized when a variable is assigned to one of two 
 * keywords: true and false. Booleans enable the implementation of conditional 
 * logic: we can test if a condition is true or false and program responses to 
 * each boolean value.  
 * 
*/

let someCondition = true;

if (someCondition === false){
  console.log("Do this.");     // does nothing since condition is false
};

if (someCondition === true){
  console.log("Do that.");     // prints => Do that.
}; 

/**
 *  
 * 4) Array
 * 
 * Array DataTypes are initialized by a pair of enclosing square brackets, [], 
 * which may optionally be populated with comma-separated values. Arrays are 
 * ordered lists of values; a value's location is represented as a numeric index 
 * within the array. Arrays are zero indexed, so the first element is stored 
 * and index 0 (zero). Elements are added to and accessed from an array with 
 * bracket notation, using the index of the element to locate it within the array.  
 * 
*/

let emptyArray = [];
emptyArray[0] = "First element!";
console.log(emptyArray);  // prints => [ 'First element!' ]
console.log(emptyArray[0]); // prints => First element!

/**
 *  
 * 5) Object
 * 
 * Object DataTypes are initialized by a pair of enclosing curly brackets, {}, 
 * which may optionally be populated with key-value pairs, which are also known 
 * as 'properties'. An object's properties are manipulated using any combination 
 * of bracket or dot notation.  
 * 
*/

let emptyObject = {};
emptyObject["firstKey"] = "first value";               // property assignment using bracket notation
emptyObject.secondKey = { nestedKey: "second value"};  // property assignment using dot notation

console.log(emptyObject); // prints => { firstKey: 'first value', secondKey: { nestedKey: 'second value'} }
console.log(emptyObject["secondKey"].nestedKey); // prints => second value

/** 
 *
 * 6) Function
 * 
 * Function DataTypes are initialized with the function keyword and supporting 
 * punctuation. Functions can be configured to accept variables as input values 
 * used in the function. The values that go into an executing function are called 
 * arguments. When writing a function declaration, the placeholders for incoming 
 * arguments are called parameters. When a function is called, it executes a block 
 * of programmatic logic, and may optionally return a value. 
 * 
*/

let putzFunction = function(){};
console.log(typeof putzFunction); // prints => function

let add = function(num1, num2){ // num1 and num2 are parameters of add function
  return num1 + num2; // returns sum of incoming arguments
};

console.log(add(1,2)); // prints => 3

/** 
 * 
 * 7) undefined
 * 
 * The undefined DataType refers to a variable that is not assigned to any other 
 * DataType. The value of an undefined variable is also undefined. Undefined 
 * DataType variables are typical of cases in which a variable is declared but 
 * not assigned. Undefined variables are falsy, meaning they resolve to the 
 * boolean false in conditional contexts. 
 * 
*/

let undefinedVariable;
console.log(undefinedVariable, typeof undefinedVariable); // prints => undefined undefined

if (undefinedVariable){
  console.log("Nope. Because 'falsy' is not 'truthy'");
}; // does nothing

if (!undefinedVariable){
  console.log("Because 'not falsy' is 'truthy'");
}; // prints => Because 'not false' is 'true'

/** 
 * 
 * 8) null
 * 
 * The null DataType represents a variable assigned to an intentionally empty value, 
 * meaning it doesn't point to any value. Null variables, like undefined variables, 
 * are falsy, but return as an object. 
 * 
*/

let nullVariable = null;
console.log(nullVariable, typeof nullVariable); // prints => null object

if (!nullVariable){
  console.log("Same as undefined.");
}; // prints => Same as undefined

if (nullVariable == undefinedVariable){
  console.log("Both are falsy, so their comparison resolves truthy");
}; // prints => Both are falsy, so their comparison resolves truthy

/** 
 * 
 * 9) NaN
 * 
 * The NaN keyword stands for 'not a number', and when assigned to a variable NaN 
 * represents a non-well-formed number. NaN's are of the number DataType, but 
 * their value resolves to NaN.  NaN's are falsy; variables are often re-assigned 
 * to NaN when they are not numbers and need to be labeled as such for later logic.
 * 
*/

let nanVariable = NaN;
console.log(nanVariable, typeof nanVariable); // prints => NaN number

if (!nanVariable){
  console.log('falsy again!'); // prints => falsy again!
};
  
/** 
 * 
 * 10) Infinity and -Infinity
 * 
 * Infinity and -Infinitity are both of the Number DataType, but represent the numeric 
 * concepts of positive and negative infinity. They can be used like any other Number. */

console.log(typeof Infinity); // prints => number
console.log(-Infinity + 1); // prints => -Infinity
console.log(1 / Infinity); // prints => 0

/**
 * 
 * 11) Primitive/simple vs. Complex DataTypes
 * 
 * Primitive DataTypes include those DataTypes the variables of which a) represent a single
 * value and b) do not contain other values. Simple DataTypes include Booleans, Strings, 
 * Numbers, undefined's, as well as NaN's (technically a number DataType) and nulls (technically 
 * an object DataType). Complex DataTypes, including Arrays and Objects, are values that 
 * store other values. Complex DataTypes may store both primitive or complex DataTypes; 
 * complex DataTypes are mutable insofar as the contents of an array or object can change 
 * without altering the overarching structure of the array or object. Simple DataTypes 
 * are immutable: their contents cannot be changed. When a simple DataType is re-assigned, 
 * rather than being changed, the variable is re-initialized with a new value.  
 *
*/

let stringVar = "string";
let booleanVar = true;
let numberVar = 23;

let arrayVar = [stringVar, booleanVar, numberVar];

console.log(arrayVar); // prints => ["string",true,23]

numberVar = 46;

console.log(numberVar); // prints => 46
console.log(arrayVar);  // prints => ["string",true,23] (Though numberVar has changed, arrayVar's 3rd element's value was copied by value to 23 upon initialization).

/**
 * 
 * 12) Primitive values are passed by copy. Complex values are passed by reference.
 * 
 * When a variable assigned to a primitive value is copied, the copied variable is 
 * declared and assigned to reference a completely new value in memory. 
*/
 
 let originalVariable = 100;
 let copiedVariable = originalVariable;
 console.log(copiedVariable); // prints => 100

/** 
 * Both the original and copied variables refer to distinct values in memory, so they 
 * may be independently re-assigned. Because each variable refers to its own "copy" of 
 * the value, primitive values are said to be copied by value. 
*/

 originalVariable = 200;
 console.log(copiedVariable); // prints => 100

/** 
 * On the other hand, complex values, such as arrays, objects and functions, are copied 
 * by reference. When a complex datatype is copied, the copied variable references the 
 * same value in memory that the original references. While copying a primitive value 
 * effectively creates two equivalent but distinct values, copying by reference does not 
 * generate new values in memory. Instead, both original and copy reference the same 
 * value in memory, so their elements may not be independently changed. 
*/

let originalObject = {key1: "value1", key2: "value2"};
let copiedObject = originalObject;
console.log(copiedObject); // prints =>  {key1: "value1", key2: "value2"}
copiedObject["key1"] = "new value"; // re-assign key1's value in copiedObject 
console.log(copiedObject); // prints => {key1: "new value", key2: "value2"}
console.log(originalObject); // prints => {key1: "new value", key2: "value2"}
