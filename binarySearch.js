const myArray = [1, 6, 8, 32, 99, 189];

function binarySearch(arr, item) {
  let lowest = 0;
  let highest = myArray.length - 1;

  while (lowest <= highest) {
    let middle = Math.floor((lowest + highest) / 2);
    let guess = arr[middle];

    if (guess === item) {
      return middle; // return array index if found
    }
    if (guess > item) {
      highest = middle - 1;
    } else {
      lowest = middle + 1;
    }
  }
  return -1;
}

console.log(binarySearch(myArray, 6));
console.log(binarySearch(myArray, 2000));
