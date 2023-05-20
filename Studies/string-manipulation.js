/**
 * STRING MANIPULATION
 * 
 * 1) With operators (+, +=)
 * 
 * 2) With string methods
 * 
 * 
 * String-Manipulation
 * 
 * 0) Intro:
 'String Manipulation' refers to a family of techniques by which a string is re-assigned to a new value. Since strings are "referenced by value", string manipulation entails the allocation of a new value to a string, rather than an update to the string value. In this way, strings are said to be immutable: their values don't change, they are created anew.
 
 * 1) With operators (+, +=)
 The operators '+' and '+=' enable the concatenation of strings to create new string values. The addition operator, '+', joins two distinct strings into one, and must be used with an assignment operator to assign a variable to the adjoined strings. It may also be used multiple times in the same statement. The addition assignment operator, '+=', effectively combines both '+' and '=', such that a value is both concatenated to a new string and re-assigned to the self-same variable in one. */

let myString = "This" + " new" + " string";
console.log(myString); // prints => This new string
myString += " is awesome.";
console.log(myString); // prints => This new string is awesome.

 
 /* 
 * 2) With string methods
 * Variable initialized as strings may be manipulated (i.e., re-assigned) using a number of string methods that alter the original string and return an updated one. Because strings are immutable, they may not be updated "in place": we must re-assign them with the assignment operator, either to the self-same variable or a new one altogether. Some examples of string methods include the following:  */

// .concat() method
 let littleString = "I am";
 let mediumString = " getting longer";
 let longString = littleString.concat(mediumString);
 console.log(longString) // prints => I am getting longer

// .slice() method
 let fullString = "Please don't cut me off, I have a lot to say!";
 let shortString = fullString.slice(0, 18);
 console.log(shortString); // prints => Please don't cut m

// .toUpperCase() method
 let quietString = "Don't you hate it when people yell in text messages?";
 let loudString = quietString.toUpperCase();
 console.log(loudString); // prints => "DON'T YOU HATE IT WHEN PEOPLE YELL IN TEXT MESSAGES?"


 * 
 */