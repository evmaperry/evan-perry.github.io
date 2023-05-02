/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare function called search in terms of animals and name parameters
function search(animals, name){
    // declare for loop to iterate over elements in animals array
    for (let i = 0 ; i <= animals.length - 1 ; i++){
        // declare conditional to evaluate if the name of the animal in animals
        // at index i === provided name arg
        if (animals[i].name === name){
            // if so, return the animal object at the index from animals
            return (animals[i]);
          }  
      }
      // if no names in animals match name arg, return null
      return null;
  }

//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// declare replace function in terms of animals, name and replacement parameters
function replace(animals, name, replacement){
    // declare for loop to iterate over elements in animals array
    for (let i = 0 ; i<=animals.length-1 ; i++){
        // declare conditional to evaluate if the name of the animal is in animals
        if (animals[i].name === name){
            // if so, reassign that animal object to the replacement object
            animals[i] = replacement;
        }
    } 
    // if name is not matched to the name of one of animals' elements, do nothing
}

//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



//////////////////////////////////////////////////////////////////////
// Step 4 - Add ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
