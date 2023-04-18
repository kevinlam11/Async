// State vowels, create function that iterates through all characters of string and checks for vowels using includes
function countVowels(str) {
  const vowels = ["a", "e", "i", "o", "u"];
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    // If character is a vowel, increment count
    if (vowels.includes(str[i].toLowerCase())) {
      count++;
    }
  }
  return count;
}

let string = "Hello, World!";
let numVowels = countVowels(string);
console.log(numVowels);
