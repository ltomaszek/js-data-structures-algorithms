// String reverse functions

function reverseString(str) {
  //check input
  if (!str || typeof str != 'string' || str.length < 2) {
    return "Error!!! Not a string!";
  }

  const backwards = [];
  for (let i = str.length - 1; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('')
}

function reverseString2(str) {
  return str.split('').reverse().join('')
}


myString = "abcde";
console.log(reverseString(myString));
console.log(reverseString2(myString));

const reverse3 = str => str.split('').reverse().join('');
const reverse4 = str => [...str].reverse().join('');
console.log(reverse3(myString))
console.log(reverse4(myString))

