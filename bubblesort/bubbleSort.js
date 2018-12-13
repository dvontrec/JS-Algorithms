// function that recieves an array and returns the array sorted
function bubbleSort(arr) {
  // DO stuff
  // loops through from end of array to the beginning
  for (let i = arr.length - 1; i >= 0; i--) {
    // loop through array from the beginning to i
    for (let j = 0; j <= i; j++) {
      //if arr[j] is greater than j[i] swap them
      if (arr[j] > arr[i]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  // return sorted array
  return arr;
}

console.log(bubbleSort([3, 1, 4, 12, -1, -8, 103, 6, 33, 5, 11, 2, 58, 0]));
