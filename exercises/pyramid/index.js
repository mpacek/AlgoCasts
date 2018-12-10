// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
  let a = 1;
  let b = n - 1;

  const addChar = (m, char) => {
    let charString = '';

    for (let k = 1; k <= m; k++) {
      charString += char;
    }

    return charString;
  };

  for (let i = 1; i <= n; i++) {
    console.log(addChar(b, ' ') + addChar(a, '#') + addChar(b, ' '));
    a += 2;
    b -= 1;
  }
}

module.exports = pyramid;

// function pyramid(n) {
//   let a = 1;
//   let b = n - 1;
//
//   const addChar = (m, char) => {
//     let charString = '';
//
//     for (let k = 1; k <= m; k++) {
//       charString += char;
//     }
//
//     return charString;
//   };
//
//   for (let i = 1; i <= n; i++) {
//     console.log(addChar(b, ' ') + addChar(a, '#') + addChar(b, ' '));
//     a += 2;
//     b -= 1;
//   }
// }
