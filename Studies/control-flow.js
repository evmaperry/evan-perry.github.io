/** 
 * 
 * CONTROL FLOW
 * 
 * 0) Intro
 * 
 * A program's 'control flow' describes what code executes under what conditions, 
 * and how many times. If a program's code typically executes top-to-bottom, then 
 * control flow describes how that straightforward execution is altered through 
 * using certain programming techniques, such as conditional logic, loops and 
 * functions. These techniques re-direct the execution of code (i.e., they 
 * "control the flow" of execution) into non-linear paths. 
 * 
 * 1) If
 * 
 * The 'If' statement initiates a sequence of conditional logic that defines a 
 * program's control flow. 'If' statements include a conditional expression and 
 * a block of code that may or may ot execute, depending on the resolution of 
 * the conditional expression. If the conditional statement evaulates as true, 
 * then the underlying code block will execute. 'If' statements formally look 
 * like this:

if (condition){
  // block of code to execute
}
 
*/

if (true){                                                 // condition is definitionally true, therefore... 
    console.log("The condition is true, therefore I am."); // prints => The condition is true, therefore I am.
  }

/**
 * 
 * 2) Else-if
 * 
 * The 'Else-if' statement allows the chaining of conditionals into a sequence 
 * of programmatic logic. 'Else-if' statements necessarily follow 'If' statements, 
 * and they execute only in case the preceding 'If' statement evaluates to false. 
 * In this way, multiple conditional statements can be chained together to handle 
 * complex condition sequences. 'If-else' statements look like this:
  
  if (1st condition){
    // block to execute based on 1st condition
  } else if (2nd condition){
    // block to execute base on 2nd condition
  } 
  
*/

  if (false){
    console.log("I'll print if 'false' is true"); // will not execute
  } else if (true){
    console.log("I print") // prints => "I print"
  }

/**
 * 
 * 3) Else
 * 
 * The 'Else' statement is used to provide a default behavior for chains of 
 * conditional logic that are composed of 'If' and 'Else if' statements. The 
 * execution of an 'Else' statement is not dependent on its own conditional's 
 * evaluation (as it doesn't have its own condition); instead, it executes in 
 * case all preceding conditional statements have evaluated false. 'If all else 
 * fails, do this' is the essence of an 'Else' statement. Alongside other 
 * conditional logic statements, 'Else' statements look like this:
  
  if (1st condition){
    // block to execute based on 1st condition
  } else if (2nd condition){
    // block to execute base on 2nd condition
  } else { // block to execute if 1st and 2nd conditions fail }
  
*/ 

   if (false){
     console.log("Not gonna happen.");
   } else if (false){
     console.log("Me neither.");
   } else { console.log("Step aside, you two!"); } // prints => Step aside, you two!

/** 
 * 
 * 4) Switch
 * 
 * 'Switch' statements encapsulate chains of conditional logic statements, but 
 * in a syntactically simpler manner. 'Switch' statements alter control flow 
 * by evaluating expressions on case-by-case bases, rather that on chained conditional 
 * bases. 'Switch' statements, therefore, avoid the syntactical complexities of 
 * chaining multiple conditions together. 'Switch' statements can feature 'break' 
 * statements, which breaks execution out of the switch statement, and 'default' 
 * statements, which execute an underlying code block in case all preceding cases 
 * fail or if the statement is not broken out of. Switch' statements look like this:
  
  switch(expression){
    case Case1:
      // code to execute if Case1 evaluates to true against switch expression
      break;
    case Case2:
      // code to execute if Case2 evaluates to true against switch expression
      break;
    default:
      // code to execute if Case1 and Case2 both evaluate to false against switch expression
  }
  
*/

  let color = "blue";
  
  switch (color){
    case "red":
      console.log("The color is red");
      break;
    case "blue":
      console.log("The color is blue"); // prints => The color is blue
    default:                            // But because we didn't use 'break' to exit 'Switch' statement...
      console.log("Color unrecognized or did not break out properly.") // ... also prints => "Color unrecognized..." 
  }
  