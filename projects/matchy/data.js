/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal = {}; // declare animal variable
animal.species = 'crocodile'; // assign animal's species property to crocodile
animal["name"] = 'Ronny'; // assign animal's name to Ronny
animal.noises = []; // declare animal's noises property to empty array
console.log(animal); // console log animal to confirm


//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var noises = []; // initialize noises as empty array
noises[0] = "Bark!";  // assign first noises element as Bark!
noises.splice(noises.length, 0, "Roar!"); // assign second noises element as Roar!
noises.unshift("Slurp!");
noises[noises.length] = "Gulp!";
console.log(noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
animal.noises = noises;
noises.push("Ouch!");
console.log(animal);

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animals = [];
animals.push(animal);
var duck = { species: 'duck', name: 'Jerome', noises: ['Quack!', 'Honk!', 'Sneeze!', 'Woosh!'] };
animals.push(duck);
var dolphin = { species: 'dolphin', name: 'Bill', noises: ['Click!', 'Squeal!', 'Splash!', 'Kee-kee-kee!'] }
var parrot = {species: 'parrot', name: 'Steve', noises: ['Hello!', 'Goodbye!', 'Squawk!', 'Flap!'] };
animals.push(dolphin); 
animals.push(parrot);

console.log(animals);


//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// Initialize an array to store list of friends. The friends array
// constitutes on ordered list, and we want the functionality of an array
// and its methods to manipulate the data

var friends = [];
function getRandom(animals){
  return Math.floor(Math.random() * animals.length);
}


/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}