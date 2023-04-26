// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
function isArray(value) {
    // YOUR CODE BELOW HERE //
    // return if val is an array with isArray method
    return Array.isArray(value);
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
function isObject(value) {
    // YOUR CODE BELOW HERE //
    // initialize var that evaluatess true or false if value is any object
    let isObject = value instanceof Object;
    // init var that evals t/f if value is null
    let isNull = (value === null);
    // init var that evals t/f if value is an array
    let isArray = (Array.isArray(value));
    // init var that evals t/f if value is a date
    let isDate = (value instanceof Date); 

    // declare if statement to evaluate that val is an object,
    // but not null, not an array, and not a date
    if (isObject && !isNull && !isArray && !isDate){
        return true; // if so, return true
    } else {return false;} // else return false

    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    // declare isObject variable to evaluate if value is instance of any object
    let isObject = value instanceof Object;
    // declare isNull variable to eval if value is null
    let isNull = (value === null);
    // declare isArray variable to eval if value is Array
    let isArray = (Array.isArray(value));
    // declare isDate variable to eval if value is instance of Date
    let isDate = (value instanceof Date); 
    // declare conditional to eval if value is collection-type object OR array
   if ((isObject && !isNull && !isArray && !isDate) || isArray){
    return true; // if so, return true
   } else {return false;} // else return false
    

    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    // declare switch statement to evaulate if case is true
    switch (true) {
        // declare case to evaluate if value's typeof is 'string' 
        case typeof value === "string":
          // if so, return "string"
          return "string";
          break; // then break out of switch
        // declare case to eval if value isArray  
        case Array.isArray(value):
          // if so, return 'array'
          return "array";
          break; // then break out of switch
        // declare case to eval if value's type is function
        case (typeof value === "function"):
          // if so, return 'function'
          return "function";
          break; // then break out of switch
        // declare case to eval if value isObject from above
        case isObject(value):
          // if so, return 'object'
          return "object"
          break; // then break out of switch
        // declare case to eval if value's type is 'undefined'
        case (typeof value === "undefined"):
          // if so, return 'undefined'
          return "undefined";
          break; // then break out of switch
        // declare case to eval if value's type is 'number'
        case (typeof value === "number"):
          // if so, return 'number'
          return "number";
          break; // then break out of switch
        // declare case to eval if value's type is 'boolean'
        case (typeof value === "boolean"):
          // if so, return 'boolean'
          return "boolean";
          break; // then break out
        // declare case to eval if value is null
        case (value === null):
          return "null"; // if so, return 'null'
          break; // then break out of switch
        // declare case to eval if value is instance of Date
        case (value instanceof Date):
          return "date"; // if so, return 'date'
          break; // then break out of switch statement
    }    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
