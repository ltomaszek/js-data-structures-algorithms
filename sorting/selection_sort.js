const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function selectionSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    // index of the smallest value
    let smallestIdx = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[smallestIdx]) {
        smallestIdx = j;
      }
    }
    // swap
    if (smallestIdx != i) {
      let temp = array[i];
      array[i] = array[smallestIdx];
      array[smallestIdx] = temp;
    }
  }
}

selectionSort(numbers);
console.log(numbers);