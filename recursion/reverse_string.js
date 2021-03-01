//Implement a function that reverses a string using iteration...and then recursion!

function reverseString(str) {
  let reversed = '';
  for (let i in str) {
    reversed += str[str.length - 1 - i];
  }
  return reversed;
}

function reverseStringRec(str) {
  if (str.length == 0) 
    return '';

  //return str[str.length - 1] + reverseStringRec(str.substring(0, str.length - 1));
  return reverseStringRec(str.substring(1)) + str[0];
}


console.log(reverseString('yoyo mastery'))
console.log(reverseStringRec('yoyo mastery'))
//should return: 'yretsam oyoy'