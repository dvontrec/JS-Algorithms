// Function used to determine if 2 strings are premutations of one another
// Input: 2 strings
// Output: Boolean
const checkPremutation = (s1, s2) => {
  // if the string lengths do not match return false
  if (s1.length != s2.length) {
    return false;
  }
  // create 2 objects to hold character and character count
  let chars1 = {};
  let chars2 = {};
  // loop through the string adding characters to the object
  for (let i = 0; i < s1.length; i++) {
    // if the character is in the table increment, or else set it to one
    if (chars1[s1[i].toLowerCase()]) {
      chars1[s1[i].toLowerCase()]++;
    } else chars1[s1[i].toLowerCase()] = 1;
    if (chars2[s2[i].toLowerCase()]) {
      chars2[s2[i].toLowerCase()]++;
    } else chars2[s2[i].toLowerCase()] = 1;
  }
  // loops through all the characters and if they do not match character and count return false
  for (char in chars1) {
    if (chars1[char] != chars2[char]) {
      return false;
    }
  }
  // if get this far return true
  return true;
};

console.log(checkPremutation('apple', 'palpe')); // true
console.log(checkPremutation('', 'test')); // false
console.log(checkPremutation('running back', 'rbuann cking')); // true
console.log(checkPremutation('God', 'dog')); // true
console.log(checkPremutation('God     ', 'dog')); // false
