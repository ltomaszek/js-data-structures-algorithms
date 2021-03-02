const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  for (let i = 1; i < array.length; i++) {
    let j = i;
    // swap as long as array[j-1] is greater than array[j]; decrease j after each swap
    while (j > 0 && array[j-1] > array[j]) {
      let temp = array[j-1];
      array[j-1] = array[j];
      array[j] = temp;
      j--;
    }
  }
}

insertionSort(numbers);
console.log(numbers);