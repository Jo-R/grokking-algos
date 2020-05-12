// divide and conquer
// add up the numbers in an array using a recursive function
// count the items in array, also recursive
// find maximum number, also recursive

const arr = [1, 2, 3, 4];

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

function findMax(array) {} // TODO!

console.log(sum([...arr])); // spreading the array so they are copies and original not mutated by fx
console.log(countItems([...arr]));
console.log(findMax([...arr]));
