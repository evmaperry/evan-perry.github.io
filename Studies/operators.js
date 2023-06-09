/** 
 * 
 * OPERATORS
 *
 * 0) Intro
 * 
 * Operators enable variables to undergo a number of essential programmatic processes. Each operator 
 * requires a certain number of operands to function properly. The operators listed below are 
 * responsible for processes like assigning variables, combining multiple variables into one, 
 * comparing variables, and defining programmatic logic.  
 *
 * 
 * 1) Assignment Operators
 * 
 * In order to assign a variable to a value, the assignment operator, =, must be placed between 
 * the variable and the value, like so:  
*/

let assignedVar = "value";

/** 
 * With numbers datatypes, assignment operators perform mathematical operations on two 
 * number operands and re-assign a variable to the result. 
*/

let zero = 0; // declare zero variable to the number 0
zero += 1; // add 1 to zero with addition assignment operator, reassign zero to the result (1)
zero *= 2; // multiply zero by 2 with mulitplication assignment operator, reassign zero to the result (2)
zero /= 2; // divide zero by 2 with division assignment operator, reassign zero to result (1)
zero -= 1; // subtract 1 from zero with subtraction assignment operator, reassign zero to result (0)
console.log(zero); // prints => 0

/** 
 * With strings, the addition assignment operator assigns the variable to itself concatenated to 
 * another string value. 
*/

let repeatString = "repeat"; 
repeatString += "repeat"; // concatenates "repeat" to "repeat"
console.log(repeatString); // prints => repeatrepeat

/** 
 * 
 * 2) Arithmetic Operators
 * 
 * Arithmetic operators perform mathematical operations on number variables. Multiple arithmetic operations 
 * can be chained to return a single mathematical value. Operational precedence is set with parentheses, 
 * ()'s. 
 * 
 * Javascript features the following arithmetic operators that work on operands of the number datatype: 
 * 
 * Binary arithmetic operators: these operations work with both variables assigned to numbers (like 
 * "count") and latin numerals (like 12)
 * 
 *     +   |   addition operator         |  sums two numbers
 *     -   |   subtraction operator      |  deducts the latter number from the former
 *     *   |   multiplication operator   |  multiplies two numbers
 *     /   |   division operator         |  divides the former number by the latter number
 *     %   |   remainder operator        |  returns the remainder of a division operation after the dividend is evenly
 *         |                             |  divided by the divisor
 *    **   |   exponential operator      |  multiplies the former number by itself as many times as the latter number
 * 
 * Unary arithmetic operators: these operations only work with variables assigned to numbers
 * 
 *    ++   |   increment operator        |  reassigns a variable operand to itself plus 1
 *    --   |   decrement operator        |  reassigns a variable operand to itself minus 1
 * 
*/ 

let additionOp = 1 + 2;                             // assigns 3 to addOp variable, as 1 + 2 = 3
let subtractionOp = additionOp - 1;                 // assigns 2 to subtractOp variable, as 3 - 1 = 2 
let multiplyOp = additionOp * subtractionOp;        // assigns 6 to multiplyOp variable, as 3 * 2 = 6
let divisionOp = multiplyOp / additionOp;           // assigns 2 to divisionOp variable, as 6 / 3 = 2

let remainderOp = 14 % 4;                           // assigns 2 to remainderOp variable, as 2 remains after
                                                    // 14 is evenly divided by 4 
let exponentOp = remainderOp ** 3;                  // assigns 8 to exponentOp variable, as 2 * 2 * 2 = 8

// let onePlusOne = 1++;                            // would return a syntax error; will not assign onePlusOne to 2 
let incrementOp = 1;                                // assigns incrementOp variable to 1
incrementOp++;                                      // reassigns incrementOp to 2, as 1 + 1 = 2

let decrementOp = 10;                               // assigns decrementOp variable to 10
decrementOp--;                                      // reassigns decrementOp to 9, as 10 - 1 = 9

/**  
 * 
 * 3) Comparison Operators
 * 
 * Evaluations of the equivalence or similarity are performed with comparison operators. Because 
 * these operators compare things, they require two operands to function. 
*/

if(2<3){ // Less than operator evaulates if 2 is less than 3
  if(2==2){ // Equality operator evaulates if 2 equals 2
    if(2!=1){ // Inequality operator evaulates if 2 doesn't equal 2 
      if(3>=3){ // Greater or equal operator evaluates if 3 is greater than or equal to 3.
        console.log("All true");
      }
    }
  }
};

/**
 * The "strict" equality operator, ===, compares values by both value and datatype. The strict 
 * inequality operator, !==, will return true if either the values or datatypes are not equal. 
 * Non-strict equality and inequality operators, == and !=, do not compare by type. 
 */

console.log("2" == 2); // prints => true
console.log("2" !== 2); // prints => true
 
 
/** 
 * 
 * 4) Logical Operators
 * 
 * Logical operators help to define boolean expressions. Logical AND, written as &&, and 
 * logical OR, written as ||, both take two operands that resolve to booleans, and then return 
 * either true or false. The truth tables below illustrate what operand values produce what 
 * results when evaluated with && and ||.
    
    Logical AND (A && B) 
                  A 
          | true  | false |    
B | true  | true  | false |
  | false | false | false |

    Logical OR  (A || B) 
                  A 
          | true  | false |    
B | true  | true  | true  |
  | false | true  | false |

*/ 

console.log(true && true, true && false); // prints => true false
console.log(false || false, true || false); // prints => false true

/**
 * The logical NOT operator, !, resolves a boolean expression to its opposite value. 
 * It operates on a single value. 
*/

console.log(!true) // prints => false

/**
 * 
 * 5) Unary Operators (!, typeOf, -)
 * 
 * Unary operators perform logic on single values:
 * 
 * - Logical NOT, !, returns the opposite value of a boolean expression
 * - typeof returns the datatype of an operand
 * - the negation operator, -, returns the negative value of a number. 
 * 
*/

let numberType = 12;
console.log(!(typeof numberType === "string")); // prints => true 

/** 
 * 
 * 6) Ternary Operator (a ? b : c)
 * 
 * The ternary operator performs an if-else logical operation in a single line using ? and :. 
 * Ternary's are written in the form of:
 
 a ? b : c
 
 * Left of the question mark, 'a' is a condition that evaluates to true or false. If 'a' is 
 * true, 'b' executes. If 'a' is false, 'c' executes. 'b' and 'c' are separated by a colon. 
 * The ternary operator is the only operator that takes three operands.
 * 
 */

let ternaryValue1 = true? "true is true" : "true is false";
console.log(ternaryValue1); // prints => true is true 
let ternaryValue2 = false? "false is true" : "false is false";
console.log(ternaryValue2); // prints => false is false