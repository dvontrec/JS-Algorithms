// Function used to turn a string to a url string
// Input: String with space for extra chars and a count for the real word length
const urlify = (str, count) => {
  // creae a pointer to traverse the string backwards starting from the last character
  let point = count - 1;
  // create a pointer to swap characters in place
  let posPointer = str.length - 1;
  // split the string into an array of characters
  str = str.split('');
  // while there are characters to traverse
  while (point >= 0) {
    // if the current pointed at character is a space replace the next 3 indexes with %20
    if (str[point] == ' ') {
      str[posPointer] = '0';
      posPointer--;
      str[posPointer] = '2';
      posPointer--;
      str[posPointer] = '%';
      posPointer--;
      point--;
    } else {
      // If the character is not a space put it in the position
      str[posPointer] = str[point];
      posPointer--;
      point--;
    }
  }
  // return the character array joined as a string
  return str.join('');
};

console.log(urlify('Mr John Smith    ', 13)); // Mr%20John%20Smith
