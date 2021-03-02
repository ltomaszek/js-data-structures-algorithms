const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// left, right indexex - both included
function quickSort(array, left, right){
  if (left >= right) {
    return;
  }
  let pivot = right;
  let pivotValue = array[pivot]

  let i = left;   // index to check
  while(i < pivot) {
    if (array[i] > pivotValue) {
      let iValue = array[i];
      array[i] = array[pivot-1];
      array[pivot-1] = pivotValue;
      array[pivot] = iValue;
      pivot--;
    } else {
      i++;
    }
  }

  quickSort(array, left, pivot - 1);
  quickSort(array, pivot + 1, right);
}

quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);