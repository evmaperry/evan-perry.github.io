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

    // declare capitalizedName variable, assign it to object's name, capitalized
    let capitalizedName = capitalizeWord(object.name); 
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

function maybeNoises(object) { // declare maybeNoises function in terms of object parameter
    let printArray = []; // declare printArray to store object's noises
    
    // declare conditional to evaluate if object's noises property's value is an array with elements in it
    if (Array.isArray(object.noises) && object.noises.length > 0){
        for (let i = 0 ; i <= object.noises.length -1 ; i++){ // declare for loop to iterate over object's noises array
            printArray.push(object.noises[i]) // each iteration, push noises element at index i into printArray
        }
        // declare else statement to return string in case object's noises property is either not an array or an empty array
    } else {return "there are no noises"} 
    
    return printArray.join(" "); // return space-separated string joined from printArray's elements
}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function hasWord(string, word) { // declare hasWord function in terms of stirng, word parameters
    if (string.includes(word)){ // declare conditional to evaluate if string argument includes word argument 
        return true; // if so, return true
    } else { return false; } // if not, return false
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function addFriend (name, object) { // declare addFriend function in terms of name, object parameters
    object.friends.push(name); // push name argument into object's friends array
    return object; // return the updated object
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function isFriend(name, object) { // declare isFriend function in terms of name, object parameters
    if(Array.isArray(object.friends)){ // declare conditional to evaluate if object's friends property is an array
        for (let i = 0 ; i <= object.friends.length -1 ; i++){ // if so, declare for loop to iterate over object's friends array
            if(object.friends[i] === name){ // each iteration, declare conditional to evaluate if element of object's friends array equals name arg 
                return true; // if so, return true
            }
        }
    }
    return false; // return false (this executes if name arg does not match any elements in object's friends array)
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// Overall, the idea is to find the difference between all the names in the 
// array and the friends of the object (denoted by name argument) in the array parameter.
// This leaves us with the people who aren't in the object's friends array.
// Could have used array.includes() to simplify greatly.

function nonFriends(name, array) { // declare nonFriends function in terms of name, array parameters
    let allNames = []; // declare allNames variable as empty array
  for ( let i = 0 ; i <= array.length - 1 ; i++){ // declare for loop to iterate over array arg
    allNames.push(array[i].name); // each iteration, push the name property value of element in array at index i
  }
  
  let friendsAndSelf = []; // declare friendsAndSelf variable, assign to empty array
  for (let i = 0 ; i <= array.length - 1 ; i++){ // declare for loop to iterate over array argument
    // each iteration, declare conditional to evaluate if the name argument equals the name property value of
    // the element at index i. This selects the correct object from array.
    if (array[i].name === name){ 
      // if so, reassign friendsAndSelf variable to the friends array of the object in array at index i
      friendsAndSelf = array[i].friends; 
    }
  }
  // then push the name arg into friendsAndSelf. After this, we can 
  // find the difference between allNames and friendsAndSelf
  friendsAndSelf.push(name); 
  
  // declare for loop to iterate over friendsAndSelf array
  for (let j = 0 ; j <= friendsAndSelf.length - 1 ; j++){
    // declare for loop to iterate over allNames array
    for (let k = 0 ; k <= allNames.length - 1 ; k++){
      // declare conditional to evaluate if element in friendsAndSelf at index i
      // equals element in allNames at index k. This is the same as saying:
      // does each name in friendsAndSelf equal some name in allNames
      if ( friendsAndSelf[j] === allNames[k] ){
        allNames.splice(allNames.indexOf(allNames[k]), 1); // if so, remove that name from allNames with splice
      }
    }
  }
  // return updated allNames array, which will have matching names removed, leaving non-friends (and non-self)
  return allNames;

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) { // declare updateObject function in terms of object, key, value parameters
    for (let key2 in object){ // declare for loop-in loop to iterate over object keys (called key2 to avoid ambiguity with key parameter)
        if (object[key2] === key){ // each iteration, declare conditional to evaluate if object's key equals key 
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