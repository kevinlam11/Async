//If else statement that takes num and returns true if it is divisible by 10. Otherwise(Else), it is false
function divByTen(num) {
  if (num % 10 === 0) {
    return true;
  } else {
    return false;
  }
}

console.log(divByTen(300));
console.log(divByTen(81));
// TYPE node script.js in console
