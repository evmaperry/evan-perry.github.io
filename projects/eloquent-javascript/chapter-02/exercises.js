
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function triangles(num) { // declare triangles function in terms of char parameter
  let printString = "" // declare printString variable to store and print chars
  for (let i = 1 ; i <= num ; i++){ // declare for loop to iterate 7 times
    printString += "#"; // concatenate '#' to printString each iteration
    console.log(printString, "\n"); // log printString and newline to console each iteration
  }
}
////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function fizzBuzz() { 
  for (let i = 1; i <= 15 ; i++){ // declare for loop to iterate from 1 to 15
    if (i % 5 === 0 && i % 3 === 0){ // declare conditional to evaluate if i is divisible by both 5 and 3
      console.log("fizzbuzz"); // if so, log 'fizzbuzz'
    } else if (i % 3 === 0){ // declare else-if to evaluate if i is divisible by 3
      console.log("fizz"); // if so, log 'fizz'
    } else if (i % 5 === 0){ // declare else-if to evaluate if i is divisible by 5
      console.log("buzz"); // if so, log 'buzz'
    } else {console.log(i);} // else log index
  }
}

////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function drawChessboard(sideLength) { // declare drawChessboard function in terms of sideLength
  let storageArray = []; // declare storageArray as empty array

  for (let i = 0 ; i < sideLength ; i++){ // declare for loop to iterate sideLength times (each iteration represents a row)
    
    let storageString = ""; // declare storageString to store characters
    
    for ( let j = 0 ; j < sideLength ; j++){ // declare nested for loop to iterate sideLength times (one square)
      
      if ((i+j) % 2 === 0 ){ // declare conditional to evaluate if sum of row and column indices are even
        storageString += " "; // if so, concatenate # to storageString
      } else { // else if not even (i.e. odd)...
        storageString += "#"; // ...then concatenate " " to storageString
      }
    } 
    storageArray.push(storageString+"\n"); // push storageString into storageArray
  }
  console.log(storageArray.join("")); // return string of unseparated, joined storageArray with newline concatenated at end
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
}
