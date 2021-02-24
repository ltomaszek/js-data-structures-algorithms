
// after merging the array should still be sorted
function mergeSortedArrays(arr1, arr2) {
  let i1 = 0;
  let i2 = 0;
  let L1 = arr1.length;
  let L2 = arr2.length;
  
  const mergedArray = [];

  while (i1 < L1 || i2 < L2) {
      if (i2 >= L2 || arr1[i1] <= arr2[i2]) {
        mergedArray.push(arr1[i1]);
        i1++;
      }
      else {
        mergedArray.push(arr2[i2]);
        i2++;
      }
  }

  return mergedArray;
}

console.log(mergeSortedArrays([1,5,9, 11], [2,3,4,5,6,10])); 