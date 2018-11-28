// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  let arrayA = toArray(stringA);
  let arrayB = toArray(stringB);

  function toArray(str) {
    return str
      .replace(/[^\w]/g, '')
      .toLowerCase()
      .split('');
  }

  for (let char of arrayA) {
    if (arrayB.indexOf(char) >= 0) {
      arrayB.splice(arrayB.indexOf(char), 1);
    } else {
      return false;
    }
  }

  if (arrayB.length) {
    return false;
  } else {
    return true;
  }
}

module.exports = anagrams;
