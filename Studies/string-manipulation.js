/** 
 * 
 * STRING MANIPULATION
 * 
 * 0) Intro
 * 
 * 'String Manipulation' refers to a family of techniques by which a string is assigned 
 * to a value or re-assigned to a new value. Since strings are "referenced by value", 
 * string manipulation entails the allocation of a new value to a string, rather than an 
 * update to the string value. In this way, strings are said to be immutable: their values 
 * don't change, and instead they are created anew.
 * 
 * 1) With operators (e.g., + and +=)
 * 
 * The operators + and += enable the concatenation of strings to create new string values. 
 * The addition operator, +, joins two distinct strings into one, and must be used with an 
 * assignment operator to assign a variable to the adjoined strings. It may also be used multiple 
 * times in the same statement. The addition assignment operator, +=, effectively combines both 
 * + and =, such that a value is both concatenated to a new string and re-assigned to the 
 * self-same variable in one. 
 * 
*/

let myString = "This" + " new" + " string"; // assigns myString variable to concatenated string of three strings
console.log(myString); // prints => This new string
myString += " is awesome."; // += effectively adds one more string to myString variable
console.log(myString); // prints => This new string is awesome.

/** 
 * 
 * 2) With String Methods
 * 
 * Variable initialized as strings may be manipulated (i.e., re-assigned) using a number of 
 * string methods that alter the original string and return an updated one. Because strings 
 * are immutable, they may not be updated "in place": we must re-assign them with the 
 * assignment operator, either to the self-same variable or a new one altogether. Some 
 * examples of string methods include the following:  
 *
*/

// .concat() method: called on a string, and concatenates string provided as method argument
// to caller.
 let littleString = "I am";
 let mediumString = " getting longer";
 let longString = littleString.concat(mediumString);
 console.log(longString) // prints => I am getting longer

// .slice() method: called on a string, and returns new string of characters
// from called string according to indices provided as method arguments
 let fullString = "Please don't cut me off, I have a lot to say!";
 let shortString = fullString.slice(0, 18);
 console.log(shortString); // prints => Please don't cut m

// .toUpperCase() method: called on string, does not require method arguments
// to be provided
 let quietString = "Don't you hate it when people yell in text messages?";
 let loudString = quietString.toUpperCase();
 console.log(loudString); // prints => "DON'T YOU HATE IT WHEN PEOPLE YELL IN TEXT MESSAGES?"

