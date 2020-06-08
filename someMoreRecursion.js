// divide and conquer
// add up the numbers in an array using a recursive function
// count the items in array, also recursive
// find maximum number, also recursive

const arr = [11, 2, 3, 4, 13, 8];

function sum(array) {
  let total = 0;
  if (array.length === 0) {
    return 0; // base case since the simplest case would be an empty array
  } else {
    const item = array.shift();
    total = item + sum(array);
    return total;
  }
}

function countItems(array) {
  let total = 0;
  if (array.length === 0) {
    return 0;
  } else {
    array.shift();
    total = 1 + countItems(array);
    return total;
  }
}

function findMax(array) {
  let max = array[0];
  if (array.length === 1) {
    return array[0];
  }
  if (array.length === 2) {
    return array[0] > array[1] ? array[0] : array[1];
  } else {
    array.shift();
    const subMax = findMax(array);
    return max > subMax ? max : subMax;
  }
}

console.log(sum([...arr])); // spreading the array so they are copies and original not mutated by fx
console.log(countItems([...arr]));
console.log(findMax([...arr]));
