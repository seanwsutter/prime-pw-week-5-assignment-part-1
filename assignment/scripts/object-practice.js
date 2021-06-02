console.log('***** NOTES *****')
// start out with new 'variable' thats equal to an 'object literal'
let card0 = { /*  code within is going to set its 'properties' of this
  particular 'object' */
  suit: 'Hearts', // ',' like arrays, but dont need trailing comma
  number: 2           // INSIDE an 'object literal' use ':' instead of '='
} // end card0

// How do we access 'properties', and how would we use them
// '.' operator.. ' 'card0.suit' will return 'Hearts' // then use those
// write a function receieves an 'argument' that is a card
// check is card 'red' or not; return true if 'red' false if not
// Check the card that is passed an 'argument'; check its .suitz
function isRed/*function name*/(cardToCheck)/*argument*/{
  // console.log('running isRed', cardToCheck );
  if(cardToCheck.suit==='Hearts'||/*or*/cardToCheck.suit==='Diamonds')/*either true*/{
    return true;
  } // end red
  else/*otherwise*/{
    return false;
  } // end !red
} // end function isRed
isRed(card0); // checking if we can test an 'object' as an 'argument' into a 'function'
/* NOT SEEING WHAT IS BEING RETURNED */
console.log(isRed(card0));
// Calling function, is card0.suits = Hearts or Diominds, yes! return 'true'
// RETURNING 'TRUE' by calling function, will have to log it out otherwise we wont see T/F
console.log('***** Object Practice *****')
// Add the required code to complete the tasks below
/* 1. Create an object literal to represent you!
  - Give the object a 'firstName & (separate) 'lastName' property
  - Give it a boolean 'hasSiblings' property
  - Give it  a numeric 'shoeCount' property
  - Also give it an array 'favThreeFoods' */
let aboutMe = { // const or let?
  // TODO - add properties here
  firstName: 'Sean',
  middleName: 'William',
  lastName: 'Sutter',
  hasSiblings: true,
  shoeCount: 3,
  favThreeFoods: ['Pizza', 'Chicken', 'Tacos']
} // end aboutMe
console.log('A little about me:', aboutMe);
/* 2. Accessing object properties.
  - Create a variable called fullName
  - Use the firstName & lastName properties of the object you
    created above to set its value.
  - Console.log fullName
*/
let fullName = aboutMe.firstName + aboutMe.lastName
console.log(fullName);

/* 3. Nested arrays
  - Console.log your first favorite food
  - Console.log your last favorite food
*/
console.log('first favoritgeaboutMe.favThreeFoods[0]);
console.log(aboutMe.favThreeFoods[aboutMe.favThreeFoods.length - 1]);
/*
let firstFavFood = aboutMe.favThreeFoods[0];
let lastFavFood = aboutMe.favThreeFoods[aboutMe.favThreeFoods.length-1];
console.log(firstFavFood);
console.log(lastFavFood);
*/
/* 4. Change a property of an existing object.
  - Console.log your current shoe count.
  - Guess what?! You just got a new pair of shoes!!!
  - Set your object's shoeCount to be what it was plus 1
  - Console.log your updated shoe count.
*/
console.log(aboutMe.shoeCount);

/* 5. Add a new property to an existing object.
  - Add a 'favoriteColor' to your existing object
  - Do this the same way you updated the variable above
  - Cool huh? It works, even though it wasn't there before
  - Console.log your object
*/
