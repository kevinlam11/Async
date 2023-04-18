// Split method splits the string into an array of words
// Join method joins the words back together with no space between them
function remSpace(str) {
  return str.split(" ").join("");
}
let string = "     Hello,        World!        ";
let newString = remSpace(string);
console.log(newString);
