function findIndexOfSmallest(array) {
  let smallest = array[0];
  smallestIdx = 0;

  array.forEach((el, i) => {
    if (el < smallest) {
      smallest = el;
      smallestIdx = i;
    }
  });

  return smallestIdx;
}

function selectionSort(array) {
  let sortedArray = [];
  let smallestIdx;
  const arrayLength = array.length;
  for (let i = 0; i < arrayLength; i++) {
    smallestIdx = findIndexOfSmallest(array);
    sortedArray = [...sortedArray, array[smallestIdx]];
    array.splice(smallestIdx, 1);
  }

  return sortedArray;
}

console.log(selectionSort([5, 3, 6, 2, 10]));
