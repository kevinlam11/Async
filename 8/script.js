let str = " Hello World   ";
let result = "";

for (let i = 0; i < str.length; i++) {
  if (str[i] !== " ") {
    result += str[i];
  }
}
