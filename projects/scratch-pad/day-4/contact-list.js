// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following methods:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 *      5. add a printAllContactNames() Function to your makeContactList() factory. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Kaelyn Chresfield
 *          
 *          WARNING: To pass this test, the LAST full name should have NO
 *          new-line character added after it!
 */

// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) { // declace makeContact function with id, nameFirst, nameLast params)
    let contact = {}; // declare contact object to store created properties

    contact.id = id; // initialize id property and assign to id argument
    contact.nameFirst = nameFirst; // initialize nameFirst property and assign to nameFirst argument
    contact.nameLast = nameLast; // initialize nameLast property and assign to nameLast argument

    return contact; // return updated contact
} 


function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    var contacts = [];
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
        },
        addContact: function(contact){ // declare addContact method as function of contact parameter
            return contacts.push(contact); // return the contacts array with contact pushed in
        },
        findContact: function(fullName){ // declare findContact method as function of fullName
            for (let i = 0 ; i <= contacts.length - 1 ; i++ ){ // declare for loop to iterate over contacts array
                // declare conditional to check if fullName arg equals concatenated string of contacts array's object's nameFirst, space, nameLast at contacts[i]
                if (fullName === contacts[i].nameFirst + " " + contacts[i].nameLast){  
                    // if so, return the object from contacts at index i
                    return contacts[i];
                }
            }            
        },
        removeContact: function(contact){
            for (let i = 0 ; i <= contacts.length -1 ; i++ ){ // declare for loop to iterate over contacts array
                if (contacts[i].id === contact.id){ // declare conditional to test if id of contact at contacts[i] equals id of contact argument
                    return contacts.splice(i, 1); // if so, return the contacts array with the object at index i removed
                }
            }

        },
        printAllContactNames(){
            let returnString = ""; // declare returnString to store names

            for ( let i = 0 ; i <= contacts.length - 2 ; i++){ // declare for loop to iterate over contacts array, but not the last one
                returnString += contacts[i].nameFirst + " " + contacts[i].nameLast + "\n"; // add concatenated string of "firstName lastName\n" to returnString 
                }

            for ( let i = contacts.length - 1 ; i <= contacts.length -1 ; i++){ // declare for loop to iterate over last object in contacts array (start and end are the same)
                returnString += contacts[i].nameFirst + " " + contacts[i].nameLast; // add concatenated string of "firstName lastName" to returnString
            }
            
            return returnString; // return the returnString




        }
    }
}

// YOUR CODE GOES ABOVE HERE //




// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
