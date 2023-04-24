// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: stringy.js
 */

/**
 * Given an input String, return its length.
 *
 * TIP: In JavaScript, how can we decipher the length of a String?
 * work?
 */
function length(string) {
    // YOUR CODE BELOW HERE //
    // return length of string
    return string.length;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to lowercase.
 */
function toLowerCase(string) {
    // YOUR CODE BELOW HERE //
    // use toLowerCase() string method to convert string input
    return string.toLowerCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to uppercase.
 */
function toUpperCase(string) {
    // YOUR CODE BELOW HERE //
    // use toUpperCase() string method to convert string
    return string.toUpperCase();
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String, return a new String forced to dash-case.
 *
 * Examples:
 *
 *      toDashCase('Hello World'); // => 'hello-world'
 *
 * TIP: How can you look for and replace a space in a String? How can you
 *      enforce lowercase? Look at the global replace link below, or, try String
 *      methods split and join?
 *
 *      See: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Using_global_and_ignore_with_replace()
 */
function toDashCase(string) {
    // YOUR CODE BELOW HERE //
    // declare regex pattern to represent a space
    let regex = / /g;
    // return input string updated to all lower and regex pattern replaced with hyphens
    return string.toLowerCase().replace(regex, "-");
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * begins with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      beginsWith('Max', 'm'); // => true;
 *      beginsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function beginsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // declare conditional to test if string's val at 0-index is char
    // with both lowerCased
    if (string[0].toLowerCase() === char.toLowerCase()){
        return true;
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input String and a single character, return true if the String
 * ends with the character, false otherwise. The Function is case insensitive.
 *
 * Example:
 *
 *      endsWith('Max', 'X'); // => true;
 *      endsWith('Max', 'z'); // => false;
 *
 * TIP: How can you use Array access to your advantage here? How can you
 *      ensure uppercase and lowercase can be compared equally?
 */
function endsWith(string, char) {
    // YOUR CODE BELOW HERE //
    // declare conditional to test if string's val at length-1 index is char
    // with both lowerCased
    if (string[string.length-1].toLowerCase() === char.toLowerCase()){
        return true;
    } else {
        return false;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two input Strings, return the Strings concatenated into one.
 *
 * TIP: What's the operator to concatenate two Strings?
 */
function concat(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // return strings concatenated with + operator
    return stringOne+stringTwo;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given any number of Strings, return all of them joined together.
 *
 * Example:
 *
 *      join("my", "name", "is", "Ben"); // => "mynameisBen";
 *
 * TIP: This Function pulls out all the arguments passed to it and stores them
 *      in an Array called args.
 */
function join(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // declare args array from function's arguments
    var args = Array.from(arguments);
    // init returnString to store concatenated string from args
    let returnString = "";
    // declare for loop to iterate args.length times
    for (let i = 0; i <= args.length-1; i++){
        // concat string at index i of args to returnString
        returnString += args[i];
    }
    // return returnString
    return returnString;
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return the longest of the two.
 *
 * Example:
 *
 *      longest("ben", "maggie");   //-> "maggie"
 *
 * TIP: What property of the String do we need to compare?
 */

function longest(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // declare if statement to evaluate if stringOne is longer than stringTwo
    if (stringOne.length > stringTwo.length){
        // if so, return stringOne
        return stringOne;
        // if not, return stringTwo
    } else {
        return stringTwo;
    }
    // YOUR CODE ABOVE HERE //
}

/**
 * Given two Strings, return 1 if the first is higher in alphabetical order than
 * the second, return -1 if the second is higher in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */

function sortAscending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // declare conditional to check if first letter 
    // (ie, index 0) of stringOne is greater than
    // first letter of stringTwo
    if (stringOne[0]>stringTwo[0]){
        return 1; // if so, return 1
      } 
    // declare else-if to check if first letter of 
    // stringTwo is greater than
    // first letter of stringOne
    else if (stringTwo[0]>stringOne[0]){
        return -1; // if so, return -1
      } 
    // declare else-if to check if letters at index 0 for both strings
    // are equal
    else if (stringOne[0] === stringTwo[0]){   
        return 0; // if so, return 0
      }
    // YOUR CODE ABOVE HERE //
}


/**
 * Given two Strings, return 1 if the first is lower in alphabetical order than
 * the second, return -1 if the second is lower in alphabetical order than the
 * first, and return 0 if they're equal.
 *
 * TIP: How can we compare Strings? Is 'a' greater than or less than 'b'?
 */
function sortDescending(stringOne, stringTwo) {
    // YOUR CODE BELOW HERE //
    // declare conditional statement to check if first letter (ie, index 0)
    // of stringOne is lower than first of stringTwo
    if (stringOne[0] < stringTwo[0]){
        return 1; // if so, return 1
      }
    // declare conditional statement to check if first letter of stringTwo
    // is less than first letter of stringOne
    else if (stringTwo[0]<stringOne[0]){
        return -1; // if so, return -1
      } 
    // declare conditional statement to check for first letter equivalence
    else if (stringTwo[0]===stringOne[0]){
        return 0; // if so, return 0
      } 
    // YOUR CODE ABOVE HERE //
}


// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.length = length;
    module.exports.toLowerCase = toLowerCase;
    module.exports.toUpperCase = toUpperCase;
    module.exports.toDashCase = toDashCase;
    module.exports.beginsWith = beginsWith;
    module.exports.endsWith = endsWith;
    module.exports.concat = concat;
    module.exports.join = join;
    module.exports.longest = longest;
    module.exports.sortAscending = sortAscending
    module.exports.sortDescending = sortDescending;
}
