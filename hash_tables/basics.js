function add(n1, n2) {
  return n1 + n2;
}

let user = {
  age: 54, 
  name: 'Kylie',
  scream: function() {
    console.log('ahhhhh!');
  },
  adding: add
};

user.scream();
console.log(user.adding);
console.log(user.adding(2, 5));

user.spell = 'abra kadabra'; // O(1)
console.log(user.spell);