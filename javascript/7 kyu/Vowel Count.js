// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
  const aux = str.match(/[aeiou]/g);

  return aux ? aux.length : 0;
}

console.log(getCount('abracadabra')); // => 5
console.log(getCount('my pyx')); // => 0
