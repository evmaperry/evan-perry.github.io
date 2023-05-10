////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function min(num1, num2) { // declare min function in terms of two num parameters
  if (num1 < num2){ // declare conditional to evaluate if num1 is less than num2
    return num1 // if so, return num1
  } else {return num2;} // if not, return num2 (which will be lesser or equal to num1)
}

////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function isEven(num) { // declare function isEven in terms of num parameter
  num = Math.abs(num); // re-assign num argument to it's absolute value, thus handling negative num edge cases
  if (num === 0){ // declare conditional to evaluate if num === 0
    return true; // if so, return true (ie, the number is even)
  }
  if (num === 1){ // declare conditional to evaluate if num === 1
    return false // if so, return false (ie, the number is odd)
  } 
  else { return isEven(num - 2) ;} // if num is neither 0 or 1, then run isEven num - 2 (the decrement of two preserves num's odd/evenness)
}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countChars(str, char) { // declare countChars function in terms of string, character parameters
  let counter = 0 // declare count variable to accumulate number of char's in str
  
  for (let i = 0 ; i <= str.length -1 ; i++){ // declare for loop to iterate over str argument
    if (str[i] === char){ // each iteration, declare contitional to evaluate if character at index i of string equals char arg
      counter ++; // if so, increment counter by 1
    }
  }
  return counter; // return counter after all char's counted in str argument
}

////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function countBs(str) { // declare countB's function in terms of string parameter
  let counter = 0; // declare count variable to denote number of B's

  for (let i = 0 ; i <= str.length - 1 ; i++){ // declare for loop to iterate over str argument
    if (str[i] === "B"){ // declare conditional to evaluate if character in string at i is "B"
      counter ++ // if so, increment counter 1
    }
  }
  return counter; // return counter after all B's have been counted
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
