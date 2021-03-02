let numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
  if (array.length < 2) {
    return array;
  }

  // Split Array in into right and left
  let mid = Math.floor(array.length / 2);
  let left = array.slice(0, mid);
  let right = array.slice(mid, array.length);
  
  let merged =  merge(
    mergeSort(left),
    mergeSort(right)
  )
  return merged;
}

function merge(left, right){
  const merged = [];
  let l = 0;
  let r = 0;
  while ((l < left.length) || (r < right.length)) {
    if (r == right.length || left[l] <= right[r]) {
      merged.push(left[l]);
      l++;
    } else {
      merged.push(right[r]);
      r++;
    }
  }
  return merged;
}

const answer = mergeSort(numbers);
console.log(answer);