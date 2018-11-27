// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let charMap = {};
  let max = 0;
  let maxChar = '';

  for (let char of str) {
    charMap[char] = charMap[char] + 1 || 1;
  }

  for (let char in charMap) {
    if (charMap[char] > max) {
      max = charMap[char];
      maxChar = char;
    }
  }

  return maxChar;
}

module.exports = maxChar;

// function maxChar(str) {
//   let chars = {};
//   let max = 0;
//
//   str.split('').map(char => {
//     return (chars[char] = chars[char] ? chars[char] + 1 : 1);
//   });
//
//   max = Object.values(chars).reduce((previous, current) => {
//     return (previous = current > previous ? current : previous);
//   }, 0);
//
//   return Object.keys(chars).find(key => chars[key] === max);
// }
