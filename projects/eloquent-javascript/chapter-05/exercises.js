// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// declare flatten function in terms of array parameter
function flatten(array) {
  // declare flattenedArrays variable and assign it to a reduction over array argument
  let flattenedArrays = array.reduce((accumulator, current) => {
    // every iteration, re-assign the accumulator as itself concatted to the current array
    accumulator = accumulator.concat(current);
    // return the accumulator for next iteration of reduce method
    return accumulator;
  }, [])
  return flattenedArrays; // return the flattenedArrays array after reduce method executes
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// declare loop function in terms of value, test function, update function, body function 
function loop(value, testFunc, updateFunc, bodyFunc) {
  // declare conditional to evaluate if value passes test func
  if(testFunc(value)){
    // if so, execute body function on value
    bodyFunc(value);
    // then recurse over loop function, inputting value run through 
    // updateFunc and self-same function args
    return loop(updateFunc(value), testFunc, updateFunc, bodyFunc);
  }
}

// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// declare every function in terms of array, test function parameters
function every(array, test) {
  // declare condition to evaluate if array is empty
  if (array.length === 0){
    // if so, return true -- all array elements have passed test
    return true;
  }
  // declare condition to evaluate if, each iteration, the 
  // first element of the array fails the test
  if (test(array[0]) ===  false){
    // if so, return false
    return false;
  }
  // return a recursive call on every for next element
  // in array
  return every(array.slice(1), test)
}

// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////
// skip this one if needed.
function dominantDirection() {

}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
