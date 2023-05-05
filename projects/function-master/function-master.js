//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function objectValues(object) { // declare objectValues function in terms of object parameter
    let storageArr = []; // assign storageArr as empty array to push into

    for (let key in object){ // declare for loop to iterate over object keys
        storageArr.push(object[key]); // push value of object at key to storageArr
    }
    return storageArr; // return storageArr
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) { // declare keysToString function in terms of object parameter
    let storageArr = []; // declare storageArr to store objects' keys' values

    for (let key in object){ // declare for loop to iterate ver object
        storageArr.push(key); // push key into storageArr
    }

    return storageArr.join(" "); // return string of joined elements from storageArr
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) { // declare valuesToString function in terms of object parameter
    let storageArr = []; // declare storageArr to store object's keys' values

    for (let key in object){ // declare for-in loop to iterate over object keys
      if (typeof object[key] === "string") // declare conditional to evaluate if key's value is a string each iteration
        storageArr.push(object[key]); // if so, push value into storageArr
      }

    return storageArr.join(" "); // return string of elemets joined from storageArr
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) { // declare arrayOrObject function in terms of collection parameter
    if (Array.isArray(collection)){ // declare conditional to evaluate if collection is an array
        return 'array'; // if so, return 'array'
    } else if (collection instanceof Object){ // declare else-if conditional to evaluate if collection is an object
        return 'object'; // if so, return object
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) { // declare capitalizeWord function in terms of string parameter
    let firstLetter = string[0].toUpperCase(); // declare firstLetter variable and assign to upper-cased char of string at index 0
    // declare restOfString variable, assign it to string sliced from index one to string's end
    let restOfString = string.slice(1, string.length); 
    return firstLetter+restOfString; // return string concatenated from firstLetter and restOfString
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) { // declare capitalizeAllWords function in terms of string parameter
    let stringArray = string.split(" "); // declare stringArray variable, assign to array of elements split from string argument
    let storageArray = []; // declare storageArray as empty array for storing capitalized words

    for (let i = 0; i <= stringArray.length -1 ; i++){  // declare for loop to iterate over length of stringArray
        // each iteration, push capitalized word from string array at index i to storageArray
        storageArray.push(capitalizeWord(stringArray[i])); 
    }

    return storageArray.join(" "); // return a space-separated string joined from elements in storageArray
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) { // declare welcomeMessage function in terms of object parameter
    let capitalizedName = capitalizeWord(object.name); // declare capitalizedName variable, assign it to object's name, capitalized
    return "Welcome " + capitalizedName + "!"; // return string concatenated from strings, capitalizedName
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) { // declare profileInfo function in terms of object parameter
    // return string concatenated from cap'd object's name, string, and cap'd object's species
    return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {
    let printArray = [];
    if (Array.isArray(object.noises) && object.noises.length > 0){
        for (let i = 0 ; i <= object.noises.length -1 ; i++){
            printArray.push(object.noises[i])
        }
    } else {return "there are no noises"}
    
    return printArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) {
    if (string.includes(word)){
        return true;
    } else { return false; }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) {
    object.friends.push(name);
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) {
    if(Array.isArray(object.friends)){
        for (let i = 0 ; i <= object.friends.length -1 ; i++){
            if(object.friends[i] === name){
                return true;
            }
        }
    }
    return false;
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
    let allNames = [];
  for ( let i = 0 ; i <= array.length - 1 ; i++){
    allNames.push(array[i].name);
  }
  
  let friendsAndSelf = [];
  for (let i = 0 ; i <= array.length - 1 ; i++){
    if (array[i].name === name){
      friendsAndSelf = array[i].friends;
    }
  }
  friendsAndSelf.push(name);
  
  for (let j = 0 ; j <= friendsAndSelf.length - 1 ; j++){
    for (let k = 0 ; k <= allNames.length - 1 ; k++){
      if ( friendsAndSelf[j] === allNames[k] ){
        allNames.splice(allNames.indexOf(allNames[k]), 1);
      }
    }
  }

  return allNames;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
    for (let key2 in object){
        if (object[key2] === key){
            object[key] = value;
        } else { object[key] = value;}
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
    for ( let i = 0 ; i <= array.length -1 ; i++){
        for ( let key in object ){
            if (array[i] === key){
                delete object[key];
            }
        }
    }
    return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
    let storageArray = [];

    for ( i = 0 ; i <= array.length -1 ; i ++){
    if (!storageArray.includes(array[i])){
      storageArray.push(array[i]);
    }
  }
    return storageArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}