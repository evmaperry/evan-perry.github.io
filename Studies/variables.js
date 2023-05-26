/**
 *  
 * VARIABLES
 * 
 * 0) Intro: 
 * 
 * Variables are the fragments of code that store a value of some datatype. If a programmer 
 * wants to work with a certain value, rather than working with the literal value, a variable 
 * provides a short-hand means of accessing the value so as to manipulate the value with code. 
 * Therefore, variables can concisely encapsulate both simplistic and complicated data structures.  
 * While it suffices in most cases to think of a variable as being "equal to" or "storing" its 
 * defined value, it is more accurate to conceptualize a variable as "pointing to" its defined 
 * value, which is stored separately in memory. 
 * 
 * 
 * 1) Declaration and Assignment
 * 
 * Variables are declared by first using a declarative keyword, then the variable name. 
 * They may be optionally immediately assigned (or initialized as) a value with the assignment 
 * operator '=', or, generally speaking, assigned later, in which case the keyword is not used. 
 * An uninitialized variable returns as 'undefined'. 
*/
 
 var initializedVar = "I'm alive!";
 var declaredVar;
 console.log(initializedVar); // prints => I'm alive
 console.log(declaredVar); // prints => undefined
 declaredVar = "Me too!"
 console.log(declaredVar) // prints => Me too!
 

/** 
 * 
 * 2) Var, Let, and Const
 * 
 * In Javascript, there are three types of variables, denoted by three unique keywords: var, 
 * let, and const. While each variable type can store values of any datatype, there are 
 * functional differences between the three that have programmatic implications.
 * 
 *    Var: short for "variable", a variable declared with 'var' can be 
 *         re-assigned to different DataTypes throughout one's code if 
 *         it is accessible. 'Var' variables are either function and global scoped: 
 *         while 'var' variables may be accessible to all blocks of code (i.e., 
 *         globally scoped), they may also be declared inside of functions 
 *         (i.e., functionally scoped) where they are sequestered from other 
 *         blocks of code and the global scope.      
*/

// Global scoped var
var myVar = "assigned vars can be";
console.log(myVar); // prints => assigned vars can be
myVar = ["reassigned"];
console.log(myVar); // prints => reassigned

// Function scoped var
function declareVar(){
  var functionVar = 12; // declare var inside of function
  console.log(myVar); // prints => reassigned
}
// console.log(functionVar) // would return => ReferenceError: functionVar is not defined

/**
 *    Let: variables declared with the 'let' keyword may be reassigned to a 
 *         different DataType, but they are block scoped. This means that 
 *         'let' variables are sequestered in the blocks in which they are 
 *         defined, such as conditional statements.
*/

let myLet = "assigned lets can be"
console.log(myLet) // prints => assigned lets can be
myLet = ["reassigned, too"];
console.log(myLet) // prints => reassigned, too

if (true){
  // console.log(myLet); // would return => ReferenceError: Cannot access 'myLet' before initialization
  let myLet = "but they're block scoped";
  console.log(myLet); // prints => but they're block scoped
}

console.log(myLet); // prints => ["reassigned, too"]

/** 
 *    Const: short for "constant", variables declared with the 'const' keyword 
 *           are also block scoped, but they cannot be re-assigned to either 
 *           new DataTypes or new values of the same DataType. 'Const' 
 *           variables must also be assigned upon their declaration. If 
 *           a complex object is declared as a const, it's internal values
 *           may be changed.
 * 
*/

const myConst = "consts cannot be"
console.log(myConst) // prints => consts cannot be
// myConst = "reassigned" // would return => TypeError: Assignment to constant variable.
// myConst = ["reassigned"] // would return => TypeError: Assignment to constant variable.

if (true){
  // console.log(myConst); // would return => ReferenceError: Cannot access 'myConst' before initialization
  const myConst = "and they're block scoped";
  console.log(myConst); // prints => and they're block scoped
}

console.log(myConst); // prints => "consts cannot be"

const myConstObj = {key1: "value1"}; // declare object variable as const with single property
myConstObj["key1"] = "new value";    // internal values can be updated on myConstObj
console.log(myConstObj);             // prints => { key1: 'new value' }


/**
 *   
 * 3) Hoisting
 * 
 * Hoisting refers to the process by which the declarations of variables with the 'var' 
 * keyword (as well as function declarations) are 'pushed up' to the top of their 
 * containing scope. Because only the declarations of vars are hoisted, vars will return as 
 * the 'undefined' datatype before the assignment of a value to var. Variables declared
 * with let and const are also hoisted, but they are not initialized (unlike var, which 
 * initializes to undefined upon being hoisted). Attempting to initialize a variable as let
 * after assigning it to a value returns a reference error, while doing so with const 
 * returns a syntax error, as const variables must be assigned when declared.
 * 
*/

console.log(x); // prints => undefined
var x = "not undefined";
console.log(x); // prints => not undefined

y = "why"; 
// let y; // would return => ReferenceError: Cannot access 'y' before initialization...

z = "zed";
// const z; // would return => SyntaxError: Missing initializer in const declaration

