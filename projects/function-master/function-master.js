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
    let storageArr = []; // declare storageArr to store keys' values of object

    for (let key in object){ // declare for loop to iterate ver object
        storageArr.push(key); 
    }

    return storageArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    let storageArr = [];

    for (let key in object){
      if (typeof object[key] === "string")
        storageArr.push(object[key]);
      }

    return storageArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return 'array';
    } else if (collection instanceof Object){
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
    let firstLetter = string[0].toUpperCase();
    let restOfString = string.slice(1, string.length);
    return firstLetter+restOfString;
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    let stringArray = string.split(" ");
    let storageArray = [];

    for (let i = 0; i <= stringArray.length -1 ; i++){
        storageArray.push(capitalizeWord(stringArray[i]));
    }

    return storageArray.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    let capitalizedName = capitalizeWord(object.name);
    return "Welcome " + capitalizedName + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
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
    // let namesInData = []; // declare namesInData array to store all names in array (called 'data' in tests)
    // for (let i = 0 ; i <= array.length -1 ; i++){ // declare for loop to iterate over array 
    //     namesInData.push(array[i].name); // each iteration, push array element's name to namesInData array
    // }

    // let notFriendsArr = []; // declare notFriendsArr to store names
    // for (let i = 0 ; i <= namesInData.length - 1 ; i++){ // declare for loop to iterate over namesInData array
    //     if (namesInData[i] !== name && name !== 
    // }

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
    // let storageArr = [];

    // for ( i = 0 ; i <= array.length-1 ; i++){
    //     for ( j = 0 ; j <= storageArr.length -1 ; j++ ){
    //         if (array[i] !== storageArr[j]){
                
    //         }
    //     }
    // }
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