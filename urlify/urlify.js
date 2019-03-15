const urlify = (str, count) => {
  let point = count - 1;
  let string = [];
  while (point >= 0) {
    if (str[point] == ' ') {
      string.unshift('%20');
      point--;
    } else {
      string.unshift(str[point]);
      point--;
    }
  }
  return string.join('');
};

console.log(urlify('Mr John Smith      ', 13));
