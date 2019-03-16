// Function used to see if a given string is a permutation of a palindrome
// Input: String
// Output: Boolean
const palindromePermutaion = str => {
  // create an object to hold character count
  let chars = {};
  // count variable to store odd characters
  let count = 0;
  // loop through the string and add teh characters to the object with the count
  for (let i = 0; i < str.length; i++) {
    let char = str[i].toLowerCase();
    if (char != ' ') {
      if (chars[char]) {
        chars[char]++;
      } else chars[char] = 1;
    }
  }
  // loops through the count and checks for any odd counts
  for (char in chars) {
    if (chars[char] % 2 != 0) {
      // an odd count will raise the count variable, we are allowed to have 1 for a pivot
      count++;
    }
  }
  // return if there is under 1 pivot
  return count <= 1;
};

console.log(palindromePermutaion('Tact Coa')); // True
