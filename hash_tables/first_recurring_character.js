//Google Question - return first recurring character
//Given an array = [2,5,1,2,3,5,1,2,4]:
//It should return 2

//Given an array = [2,1,1,2,3,5,1,2,4]:
//It should return 1

//Given an array = [2,3,4,5]:
//It should return undefined

//Bonus... What if we had this:
// [2,5,5,2,3,5,1,2,4]
// return 5 because the pairs are before 2,2


function firstRecurringCharacter(input) {
  let seenCharacters = new Set();
  for (let i = 0; i < input.length; i++) {
    let ch = input[i];
    if (seenCharacters.has(ch)) {
      return ch;
    }
    seenCharacters.add(ch);
  }
  return undefined;
}

let input = [2,5,1,2,3,5,1,2,4];
console.log(firstRecurringCharacter(input));

input = [2,1,1,2,3,5,1,2,4];
console.log(firstRecurringCharacter(input));

input = [2,3,4,5];
console.log(firstRecurringCharacter(input));

input = [2,5,5,2,3,5,1,2,4];
console.log(firstRecurringCharacter(input));
