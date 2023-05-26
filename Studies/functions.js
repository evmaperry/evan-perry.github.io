/**
 * 
 * FUNCTIONS
 * 
 * 0) Intro
 * 
 * Functions compartmentalize blocks of code to be employed repeatedly and 
 * arbitratily at the behest of the programmer. Functions are integral in developing a program's
 * control flow and enable the developer to avoid re-writing the same lines of code throughout a
 * program. The logic inherent to a function is employed by invoking (a.k.a. "calling" or 
 * "executing") the function. Oddly enough, variables assigned to functions are tehcnically
 * of the object DataType, but when a function is run on the unary typeof operator, the operation
 * returns "function". 
 * 
 * 1) Two phases of function construction: Declaration and Call/Execute
 * 
 * A function is a discrete block of code that executes when the function is invoked. A function 
 * must first be declared; the function's internal logic must be defined before being executed. 
 * Once declared, the function is invoked in code by writing the name of the function, followed 
 * by closed parentheses. Arguments may or may not be included inside the closed parentheses. 
 * 
*/

let imTheFunctionVariable = function(ImTheParameter){ // function declaration
    console.log(ImTheParameter);
  }
  
  imTheFunctionVariable("I'm the argument"); // function invocation; prints => I'm the argument.
  
/** 
 * 
 * 2) Parameters vs Arguments
 * 
 * Parameters serve as variables for the values passed into a function upon invocation. The 
 * values passed into a function when invoked are called arguments. Parameters are set in 
 * the function declaration, while arguments provide values to the function on invocation. 
 * When a parameter is declared, it is effectively declared as an unassigned variable at the 
 * top of the function block. The parameter's variable is assigned a value when an argument 
 * is provided on invocation. 
 * 
 * During a function declaration, a parameter is effectively declared as a hoisted variable 
 * in the function block: 
*/
  
  let functionNameHere = function(parameter){   // parameter is declared, 
    // let parameter;    <-----------|          //                  
    console.log(parameter)
  }
  
/** 
 * When invoked with an argument, the parameter variable is assigned the argument's value. 
 * The following invocation... 
*/
  
  functionNameHere("argument"); // prints => argument
  
/**
 * ...effectively executes the following code block: 
*/
  
  {
    let parameter = "argument"; // under the hood, parameter variable is assigned to "argument"
    console.log(parameter);     // prints => argument
  }
  
/** 
 * 
 * 3) Syntax for a named function
 * 
 * Named functions are declared by writing first the 'function' keyword, then the name of 
 * the function, then the parameters enclosed in closed parentheses, (), and then the 
 * functional code block enclosed in curly brackets, {}.
 * 
*/
  
  function name(...params) {
    // code block
  }
  
/** 
 *
 * 4) Assigning a function to a variable
 * 
 * Functions are values, and a variable can be assigned to a function. This is done can by 
 * declaring the variable name, then assigning it to a function value by using first the 
 * 'function' keyword, then the function's parameters contained in closed parentheses, (), 
 * then the function's code block contained in curly brackets, {}. 
 * 
*/
  
  let functionVariable = function(params) {  // variable declared and assigned to function
    console.log(params);                     
  }
  let anotherFunctionVariable = functionVariable
  anotherFunctionVariable("another argument"); // prints => another argument
  
/**
 * 
 * 5) Optionally specifying inputs and outputs
 * 
 * The values that a functions takes as input are called arguments, and they are provided at a 
 * function's invocation between closed parentheses and, if needed, separated by commas. 
 * Some functions don't require arguments to execute, but if a function is designed to do 
 * work in terms of input values, then arguments are a must. Function outputs are specified 
 * with the 'return' keyword, which indicates what value will come out of the function block. 
 * 
*/
  
  let returnArg2 = function(arg1, arg2){ // returnArg2 defined to take two arguments, but the
   return arg2;               // 'return' keyword designates that only arg2 is returned.
  }
  
/** 
 * 
 * 6) Functions and Scope
 * 
 * Variables declared inside of functions are scoped to the function in which they were
 * declared. In other words, a variable declared in a function cannot be accessed by code 
 * outside the function block (unless a variable's value is explicitly returned, but even then
 * the variable itself is not accessed). On the flip side, variables declared outside of 
 * a function are accessible to code written inside of a function block. Variables declared 
 * with 'let', 'var' and 'const' are all function scoped.  
 * 
*/
  
  let globalVariable = "Come and get me!";
  
  function logGlobalVariable(){
    let functionScopedVariable = "I'm staying in here.";
    console.log(globalVariable);
  }
  
  logGlobalVariable();                     // prints => Come and get me!
  // console.log(functionScopedVariable);  // would return Reference Error
   
/** 
 * 
 * 7) Functions & Closures
 * 
 * We've seen that variables declared outside of a function are accessible within the function.
 * By the same token, if a function is declared and returned within a function, the nested function 
 * has access to variables declared in the parent function. This enables functions to serve as 
 * stores for value assignments that a nested function may require for execution. 
 * 
 * A 'closure' is a combination of 1) a nested function that is returned inside the parent 
 * function and, if applicable, 2) the parent function's function-scoped variables. If a variable 
 * is assigned to the parent function of a closure, then any variables scoped in the parent function 
 * are accessible to the closure during execution of the assigned function variable. The variables 
 * declared inside the parent function persist in the reference of the assigned function.
 * 
*/ 
  
  // Parent (or outer) function declaration
    function outerMultiplyBy(num1){         
      
      // multiplier variable is assigned to num1 arg
      let multiplier = num1;           
      
      // Nested (or inner) function declaration
      let innerMultiplyBy = function(num2){     
        // Nested function reffectively returns multiplication of num1, num2
        return multiplier * num2;      
      }
      
      // Parent function returns nested function: this is a closure
      return innerMultiplyBy;        
    }
  
  // assigns variable to innerMultiplyBy closure function where multiplier assigned to 5 
  let multiplyByFive = outerMultiplyBy(5);  
  
  // assigns variable to innerMultiplyBy closure function where multiplier assigned to 10
  let multiplyByTen = outerMultiplyBy(10); 
  
  console.log(multiplyByFive(5));       // prints => 25
  console.log(multiplyByTen(10));       // prints => 100