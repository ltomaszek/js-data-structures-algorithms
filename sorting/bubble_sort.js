const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function bubbleSort(array) {
  for (let i = 0; i < array.length - 1; i++) {
    let didSwap = false;
    for (let j = 0; j < array.length - 1 - i; j++) {
      if (array[j] > array[j + 1]) {
        let temp = array[j];
        array[j] = array[j+1];
        array[j+1] = temp;
        didSwap = true;
      }
    }
    if (didSwap == false) {
      break;
    }
  }
}

bubbleSort(numbers);
console.log(numbers);

